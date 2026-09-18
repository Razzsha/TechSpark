import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  items: FaqItem[] = [
    { question: 'Do I need programming experience before joining?', answer: 'No. Every Academy track starts from the basics — you only need to be comfortable using a computer.', open: false },
    { question: 'Are classes offline, online, or both?', answer: 'Both. Each batch runs in-person at our Kathmandu campus and live online for students joining remotely.', open: false },
    { question: 'Is there a certificate after the course?', answer: 'Yes — every student who completes the coursework and final project receives a Tech Spark Skill Academy certificate.', open: false },
    { question: 'Do you help with job placement?', answer: 'Yes. Graduates get resume review, mock interviews, and introductions to our hiring partners.', open: false },
    { question: 'Can I pay the course fee in installments?', answer: 'Yes, installment plans are available for every course — ask about this when you enroll.', open: false }
  ];

  toggle(item: FaqItem): void {
    const wasOpen = item.open;
    this.items.forEach(i => (i.open = false));
    item.open = !wasOpen;
  }
}
