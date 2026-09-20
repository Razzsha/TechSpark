import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'About Techspark | Premier IT Skill Academy & Software Studio Kathmandu',
      description: 'Learn about Techspark’s mission, ISO-9001 certified curriculum, senior engineering mentors, and industry-backed software training in Nepal.',
      keywords: ['about Techspark Nepal', 'IT training institute Putalisadak Kathmandu', 'software engineering mentors Nepal'],
      canonicalUrl: 'https://techspark.edu.np/about'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }
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
