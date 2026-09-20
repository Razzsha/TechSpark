import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; tag: string; icon: string }[];
}

interface RecommendedCourse {
  title: string;
  slug: string;
  matchScore: number;
  reason: string;
  duration: string;
  fee: number;
}

@Component({
  selector: 'app-career-quiz',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './career-quiz.component.html',
  styleUrls: ['./career-quiz.component.css']
})
export class CareerQuizComponent implements OnInit {
  private seoService = inject(SeoService);

  currentStep = 1;
  selectedBackground = '';
  selectedGoal = '';
  selectedInterest = '';

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Interactive IT Career Path Finder & Skill Quiz | Techspark',
      description: 'Take our 1-minute tech career assessment quiz to find your ideal programming, AI, design, or cloud engineering learning track.',
      keywords: ['IT career quiz Nepal', 'which programming language to learn quiz', 'best tech career path finder'],
      canonicalUrl: 'https://techspark.edu.np/career-quiz'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'Career Quiz', path: '/career-quiz' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }

  questions: QuizQuestion[] = [
    {
      id: 1,
      question: 'What is your current academic or professional background?',
      options: [
        { label: 'High School (+2) / Fresh Beginner', tag: 'beginner', icon: 'fa-user-graduate' },
        { label: 'IT / Computer Science Graduate', tag: 'cs', icon: 'fa-laptop-code' },
        { label: 'Non-IT Graduate (Management / Arts / Science)', tag: 'non-it', icon: 'fa-briefcase' },
        { label: 'Working Professional looking to Upskill', tag: 'pro', icon: 'fa-user-tie' }
      ]
    },
    {
      id: 2,
      question: 'What is your primary career outcome goal?',
      options: [
        { label: 'Get a Full-Stack Software Engineer Job quickly', tag: 'fullstack', icon: 'fa-code' },
        { label: 'Master Artificial Intelligence & Data Science', tag: 'ai', icon: 'fa-brain' },
        { label: 'Design beautiful Websites & Mobile Apps (UI/UX)', tag: 'design', icon: 'fa-pen-nib' },
        { label: 'Digital Marketing & Online Business Growth', tag: 'marketing', icon: 'fa-bullhorn' }
      ]
    },
    {
      id: 3,
      question: 'What type of daily work environment excites you most?',
      options: [
        { label: 'Building complex logic & databases (Node, Python, Java)', tag: 'backend', icon: 'fa-server' },
        { label: 'Interactive UI, Figma designs & Frontend React', tag: 'frontend', icon: 'fa-desktop' },
        { label: 'Cloud Infrastructure, Security & Automation', tag: 'devops', icon: 'fa-cloud' },
        { label: 'SEO, Content Strategy & Social Media Campaigns', tag: 'seo', icon: 'fa-chart-line' }
      ]
    }
  ];

  recommendations: RecommendedCourse[] = [];

  selectOption(step: number, tag: string): void {
    if (step === 1) this.selectedBackground = tag;
    if (step === 2) this.selectedGoal = tag;
    if (step === 3) this.selectedInterest = tag;

    if (this.currentStep < 3) {
      this.currentStep++;
    } else {
      this.calculateResults();
      this.currentStep = 4; // Result view
    }
  }

  prevStep(): void {
    if (this.currentStep > 1 && this.currentStep <= 3) {
      this.currentStep--;
    }
  }

  resetQuiz(): void {
    this.currentStep = 1;
    this.selectedBackground = '';
    this.selectedGoal = '';
    this.selectedInterest = '';
    this.recommendations = [];
  }

  calculateResults(): void {
    const list: RecommendedCourse[] = [];

    if (this.selectedGoal === 'ai' || this.selectedInterest === 'backend') {
      list.push({
        title: 'AI with Python: Machine Learning & GenAI',
        slug: 'ai-python-machine-learning',
        matchScore: 98,
        reason: 'Perfect match for AI algorithms, data pipelines, and LLM agent engineering.',
        duration: '3 Months',
        fee: 28000
      });
      list.push({
        title: 'MERN Stack Development',
        slug: 'mern-stack-development',
        matchScore: 92,
        reason: 'High market demand full-stack JavaScript engineering course.',
        duration: '3.5 Months',
        fee: 25000
      });
    } else if (this.selectedGoal === 'design' || this.selectedInterest === 'frontend') {
      list.push({
        title: 'UI/UX Design Masterclass with Figma',
        slug: 'ui-ux-design-figma',
        matchScore: 97,
        reason: 'Top choice for visual interface creation, auto layout, and interactive Figma wireframing.',
        duration: '2.5 Months',
        fee: 20000
      });
      list.push({
        title: 'MERN Stack Development',
        slug: 'mern-stack-development',
        matchScore: 90,
        reason: 'Combine UI design skills with real React 18 frontend code implementation.',
        duration: '3.5 Months',
        fee: 25000
      });
    } else if (this.selectedGoal === 'marketing' || this.selectedInterest === 'seo') {
      list.push({
        title: 'Digital Marketing 360° with AI',
        slug: 'digital-marketing-360-ai',
        matchScore: 99,
        reason: 'Best fast-entry path into SEO, Meta Ads, Google Analytics, and ChatGPT marketing.',
        duration: '2.5 Months',
        fee: 18000
      });
      list.push({
        title: 'Python & Django Full Stack',
        slug: 'python-django-fullstack',
        matchScore: 84,
        reason: 'Great technical foundation for web data analytics and backend development.',
        duration: '3 Months',
        fee: 24000
      });
    } else {
      list.push({
        title: 'MERN Stack Development',
        slug: 'mern-stack-development',
        matchScore: 96,
        reason: 'Our #1 most recommended full-stack web developer program.',
        duration: '3.5 Months',
        fee: 25000
      });
      list.push({
        title: 'DevOps & AWS Cloud Engineering',
        slug: 'devops-cloud-aws-kubernetes',
        matchScore: 91,
        reason: 'Ideal choice for high salary IT systems, Docker, and Kubernetes deployment.',
        duration: '3 Months',
        fee: 30000
      });
    }

    this.recommendations = list;
  }
}
