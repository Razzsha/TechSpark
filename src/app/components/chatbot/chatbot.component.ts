import { Component, ElementRef, ViewChild, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  isQuickPrompt?: boolean;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  private courseService = inject(CourseService);

  @ViewChild('chatScroll') chatScroll?: ElementRef<HTMLDivElement>;

  isOpen = false;
  isTyping = false;
  userMessage = '';
  openAiKey = ''; // Optional user-provided OpenAI API Key
  showKeyInput = false;
  coursesList: Course[] = [];

  messages: ChatMessage[] = [
    {
      sender: 'bot',
      text: 'Hello! 👋 I am Techspark AI Assistant. I can answer any questions about our IT training courses, batch timings, tuition fees, admission process, or software services.',
      timestamp: this.getFormattedTime()
    }
  ];

  quickPrompts = [
    'What courses do you offer?',
    'When does the next MERN batch start?',
    'What is the fee for Python with AI?',
    'Where is Techspark located?',
    'Do you offer online classes?'
  ];

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(c => {
      this.coursesList = c;
    });

    const savedKey = localStorage.getItem('techspark_openai_key');
    if (savedKey) {
      this.openAiKey = savedKey;
    }
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  saveApiKey(): void {
    if (this.openAiKey.trim()) {
      localStorage.setItem('techspark_openai_key', this.openAiKey.trim());
    } else {
      localStorage.removeItem('techspark_openai_key');
    }
    this.showKeyInput = false;
  }

  sendQuickPrompt(promptText: string): void {
    this.userMessage = promptText;
    this.sendMessage();
  }

  sendMessage(): void {
    const query = this.userMessage.trim();
    if (!query) return;

    this.messages.push({
      sender: 'user',
      text: query,
      timestamp: this.getFormattedTime()
    });

    this.userMessage = '';
    this.isTyping = true;
    this.scrollToBottom();

    if (this.openAiKey && this.openAiKey.startsWith('sk-')) {
      this.fetchOpenAiResponse(query);
    } else {
      setTimeout(() => {
        const botReply = this.generateLocalAiResponse(query);
        this.messages.push({
          sender: 'bot',
          text: botReply,
          timestamp: this.getFormattedTime()
        });
        this.isTyping = false;
        this.scrollToBottom();
      }, 600);
    }
  }

  private async fetchOpenAiResponse(query: string): Promise<void> {
    const systemPrompt = `You are Techspark AI Assistant for Techspark Academy & Technology located in Tinkune, Kathmandu, Nepal.
Your goal is to answer queries strictly about Techspark's IT courses (MERN Stack, Python & Django, AI & GenAI with Python, Flutter Mobile Dev, DevOps & AWS Cloud, Cybersecurity & Ethical Hacking, Java Spring Boot, Digital Marketing 360, UI/UX Design, QA Automation, Data Science, C# .NET Core), tuition fees (NPR 18,000 - 30,000), physical vs online classes, admissions, and IT services.
Keep your responses polite, concise, professional, and formatted clearly.
If the question is completely unrelated to Techspark or IT training, politely direct the user back to Techspark courses or services.`;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.openAiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: query }
          ],
          temperature: 0.5,
          max_tokens: 300
        })
      });

      const data = await response.json();
      this.isTyping = false;

      if (data.choices && data.choices.length > 0) {
        this.messages.push({
          sender: 'bot',
          text: data.choices[0].message.content,
          timestamp: this.getFormattedTime()
        });
      } else {
        const fallbackReply = this.generateLocalAiResponse(query);
        this.messages.push({
          sender: 'bot',
          text: fallbackReply,
          timestamp: this.getFormattedTime()
        });
      }
    } catch (error) {
      this.isTyping = false;
      const fallbackReply = this.generateLocalAiResponse(query);
      this.messages.push({
        sender: 'bot',
        text: fallbackReply,
        timestamp: this.getFormattedTime()
      });
    }
    this.scrollToBottom();
  }

  private generateLocalAiResponse(rawQuery: string): string {
    const q = rawQuery.toLowerCase();

    // Location / Contact
    if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('contact') || q.includes('phone') || q.includes('map')) {
      return `📍 Techspark Academy Location & Contact:
- Address: Tinkune, Subidhanagar (Near Ring Road Bridge), Kathmandu, Nepal
- Phone Hotline: +977-1-4500000 / +977-9800000000
- Email: info@techspark.com.np
- Opening Hours: Sunday – Friday (6:30 AM – 7:00 PM)`;
    }

    // Fee / Price / Cost
    if (q.includes('fee') || q.includes('price') || q.includes('cost') || q.includes('discount') || q.includes('npr')) {
      return `💰 Tuition Fees & Special Offers:
Our professional course fees range between NPR 18,000 to NPR 30,000 depending on the domain:
- Digital Marketing 360: NPR 18,000
- UI/UX & Figma: NPR 20,000
- MERN Stack Development: NPR 25,000 (22% OFF)
- Python & Django: NPR 24,000
- AI with Python & ML: NPR 28,000
- DevOps & AWS Cloud: NPR 30,000

We also offer installment payment options and up to 20% discount for early batch registration!`;
    }

    // Courses List
    if (q.includes('course') || q.includes('program') || q.includes('offer') || q.includes('catalog') || q.includes('learn')) {
      return `🎓 Popular IT Courses at Techspark:
1. MERN Stack Development (3.5 Months)
2. Python & Django Full Stack (3 Months)
3. AI with Python: Machine Learning & GenAI (3 Months)
4. Flutter Mobile App Development (3 Months)
5. DevOps & AWS Cloud Engineering (3 Months)
6. Cybersecurity & Ethical Hacking (3.5 Months)
7. Java Full Stack (Spring Boot & Angular) (4 Months)
8. Digital Marketing 360° with AI (2.5 Months)
9. UI/UX Design Masterclass with Figma (2.5 Months)
10. Software Testing & QA Automation (2.5 Months)

You can click "All Courses" in the menu or visit the /courses page to see full module syllabi!`;
    }

    // Batch Timings / Online vs Physical
    if (q.includes('batch') || q.includes('timing') || q.includes('shift') || q.includes('online') || q.includes('physical') || q.includes('zoom') || q.includes('class')) {
      return `📅 Batches & Training Modes:
We provide both Physical Classroom and Online Live Classes!
- Morning Shift: 7:00 AM - 9:00 AM
- Day Shift: 11:00 AM - 1:00 PM
- Evening Shift: 4:00 PM - 6:00 PM

New batches start every Monday and the 1st of every month. You can register online at /enroll to reserve your seat!`;
    }

    // Admission / Enrollment
    if (q.includes('enroll') || q.includes('admission') || q.includes('apply') || q.includes('register') || q.includes('join')) {
      return `📝 How to Enroll at Techspark:
1. Visit our Online Admission Page at /enroll or click the yellow "Enroll Now" button.
2. Select your course, preferred shift (Morning/Day/Evening), and learning mode (Physical/Online).
3. Complete the form and receive your instant Application ID.
4. Our counselor will call you within 2 hours to confirm your seat!`;
    }

    // Specific Course Search matching
    const matchedCourse = this.coursesList.find(c =>
      q.includes(c.title.toLowerCase()) ||
      q.includes(c.id.toLowerCase()) ||
      c.syllabus.some(s => s.topics.some(t => q.includes(t.toLowerCase())))
    );

    if (matchedCourse) {
      return `🚀 ${matchedCourse.title}:
- Subtitle: ${matchedCourse.subtitle}
- Duration: ${matchedCourse.duration} (${matchedCourse.mode})
- Tuition Fee: NPR ${matchedCourse.price.toLocaleString()} (Original: NPR ${matchedCourse.originalPrice.toLocaleString()})
- Rating: ⭐ ${matchedCourse.rating} (${matchedCourse.ratingCount} reviews)
- Career Roles: ${matchedCourse.careerOutcomes.join(', ')}

Click "Syllabus" on the course card or visit /course/${matchedCourse.slug} for the complete module breakdown!`;
    }

    // Default polite response
    return `I am here to assist you with Techspark Academy! You can ask me about:
- 🎓 Courses (MERN, Python, AI, Flutter, DevOps, Cybersecurity, Java, UI/UX, Marketing)
- 💰 Tuition Fees & Discounts
- 📅 Upcoming Batch Schedules & Shifts
- 📍 Institute Address in Tinkune, Kathmandu
- 📝 Online Admission Process

What would you like to know more about?`;
  }

  private getFormattedTime(): string {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  private scrollToBottom(): void {
    try {
      if (this.chatScroll) {
        this.chatScroll.nativeElement.scrollTop = this.chatScroll.nativeElement.scrollHeight;
      }
    } catch (e) {}
  }
}
