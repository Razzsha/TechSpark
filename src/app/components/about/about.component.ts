import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  coreValues = [
    { title: 'Practical Learning', desc: '100% project-driven training with real enterprise codebases and Git workflows.', icon: 'fa-laptop-code' },
    { title: 'Industry Experts', desc: 'Mentors with 5+ years of active software engineering experience in top IT firms.', icon: 'fa-user-tie' },
    { title: 'Placement Guarantee', desc: 'Resume building, mock technical interviews, and direct referrals to hiring partners.', icon: 'fa-handshake' },
    { title: 'ISO 9001:2015 Certified', desc: 'Globally recognized certification standard ensuring top quality education.', icon: 'fa-certificate' }
  ];

  mentors = [
    { name: 'Er. Suman Adhikari', role: 'Lead Full-Stack Architect', exp: '8+ Yrs Exp', domain: 'MERN & Cloud' },
    { name: 'Er. Anish Shrestha', role: 'Senior AI Engineer', exp: '6+ Yrs Exp', domain: 'Python, ML & GenAI' },
    { name: 'Pooja Thapa', role: 'UI/UX Design Lead', exp: '5+ Yrs Exp', domain: 'Figma & Design Systems' },
    { name: 'Rohan KC', role: 'DevOps & Security Specialist', exp: '7+ Yrs Exp', domain: 'AWS & Kubernetes' }
  ];
}
