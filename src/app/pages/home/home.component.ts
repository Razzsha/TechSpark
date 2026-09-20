import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { SeoService } from '../../services/seo.service';
import { Course } from '../../models/course.model';
import { HeroComponent } from '../../components/hero/hero.component';
import { LogoMarqueeComponent } from '../../components/logo-marquee/logo-marquee.component';
import { ProcessComponent } from '../../components/process/process.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroComponent,
    LogoMarqueeComponent,
    ProcessComponent,
    TestimonialsComponent,
    FaqComponent,
    CtaBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private courseService = inject(CourseService);
  private seoService = inject(SeoService);

  featuredCourses: Course[] = [];

  stats = [
    { value: '15,000+', label: 'Graduates Trained', icon: 'fa-user-graduate' },
    { value: '94%', label: 'Job Placement Rate', icon: 'fa-briefcase' },
    { value: '120+', label: 'Corporate Hiring Partners', icon: 'fa-building' },
    { value: '4.9★', label: 'Student Satisfaction Score', icon: 'fa-star' }
  ];

  ngOnInit(): void {
    // Set Home Page SEO & Meta Tags
    this.seoService.setSeoData({
      title: 'Techspark | Premier IT Learning Academy & Software Solutions Nepal',
      description: 'Master full-stack web development, Python AI, DevOps, Flutter, and UI/UX design. In-person in Kathmandu & live online classes with 100% placement support.',
      keywords: [
        'IT training Kathmandu',
        'best software courses Nepal',
        'MERN stack development Nepal',
        'Python machine learning training',
        'DevOps AWS Kathmandu',
        'UI UX Figma Nepal',
        'Techspark Academy'
      ],
      canonicalUrl: 'https://techspark.edu.np/'
    });

    // Injects Organization, LocalBusiness and FAQ JSON-LD Schema
    const orgSchema = this.seoService.getOrganizationAndLocalSchema();
    const faqSchema = this.seoService.getFaqSchema([
      { question: 'Do I need programming experience before joining?', answer: 'No. Every Academy track starts from the basics — you only need to be comfortable using a computer.' },
      { question: 'Are classes offline, online, or both?', answer: 'Both. Each batch runs in-person at our Kathmandu campus and live online for students joining remotely.' },
      { question: 'Is there a certificate after the course?', answer: 'Yes — every student who completes the coursework and final project receives an official Techspark Skill Academy certificate.' },
      { question: 'Do you help with job placement?', answer: 'Yes. Graduates get resume review, mock interviews, and direct introductions to our 120+ corporate hiring partners.' },
      { question: 'Can I pay the course fee in installments?', answer: 'Yes, flexible installment plans and scholarships are available for every course.' }
    ]);

    this.seoService.setStructuredData([orgSchema, faqSchema]);

    this.courseService.getFeaturedCourses().subscribe(courses => {
      this.featuredCourses = courses;
    });
  }
}
