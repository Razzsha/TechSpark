import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

export interface TutorApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  domain: string;
  experienceYears: string;
  linkedinUrl: string;
  githubUrl?: string;
  preferredShift: string;
  mode: string;
  coverNote?: string;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  private fb = inject(FormBuilder);
  private seoService = inject(SeoService);

  isSubmitting = false;
  applicationSubmitted = false;
  applicationResult?: TutorApplication;

  tutorForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9+ -]{8,15}$')]],
    domain: ['MERN / Full-Stack Web Development', Validators.required],
    experienceYears: ['3-5 Years', Validators.required],
    linkedinUrl: ['', Validators.required],
    githubUrl: [''],
    preferredShift: ['Evening (4:00 PM - 7:00 PM)', Validators.required],
    mode: ['Physical in Kathmandu', Validators.required],
    coverNote: ['']
  });

  domains = [
    'MERN / Full-Stack Web Development (React, Node.js)',
    'Python & AI / Machine Learning (PyTorch, LangChain)',
    'DevOps & Cloud Infrastructure (AWS, Docker, K8s)',
    'Flutter & Dart Mobile App Development',
    'Java & Spring Boot Microservices',
    'UI/UX Design Masterclass & Figma Systems',
    'Cybersecurity & Ethical Hacking',
    'Software QA Automation (Selenium & Postman)'
  ];

  experienceLevels = [
    '1-2 Years (Associate Mentor)',
    '3-5 Years (Lead Instructor)',
    '5-8 Years (Senior Tech Specialist)',
    '8+ Years (Principal Architect / Advisor)'
  ];

  shifts = [
    'Morning Shift (7:00 AM - 9:00 AM)',
    'Day Shift (11:00 AM - 2:00 PM)',
    'Evening Shift (4:00 PM - 7:00 PM)',
    'Weekend Intensive Batches (Sat/Sun)',
    'Flexible / On-Demand Guest Lectures'
  ];

  openings = [
    {
      title: 'Senior MERN / Full-Stack Lead Instructor',
      type: 'Part-Time / Full-Time',
      location: 'Kathmandu / Hybrid',
      exp: '3+ Yrs Exp',
      desc: 'Guide batches through modern React 18, Node.js, Express, and MongoDB with real enterprise projects.'
    },
    {
      title: 'Python, ML & Generative AI Mentor',
      type: 'Part-Time / Evening',
      location: 'Kathmandu / Online',
      exp: '3+ Yrs Exp',
      desc: 'Teach Scikit-learn, PyTorch, LangChain, RAG chatbots, and computer vision to ambitious engineers.'
    },
    {
      title: 'DevOps & AWS Cloud Architecture Trainer',
      type: 'Morning / Evening Batch',
      location: 'Kathmandu / Remote Live',
      exp: '4+ Yrs Exp',
      desc: 'Lead hands-on labs covering Linux, Docker, Kubernetes, Jenkins CI/CD, and Terraform on AWS.'
    },
    {
      title: 'Flutter Cross-Platform Mobile Mentor',
      type: 'Part-Time',
      location: 'Kathmandu Campus',
      exp: '2+ Yrs Exp',
      desc: 'Mentor students in Dart OOP, BLoC architecture, custom animations, and Firebase integration.'
    },
    {
      title: 'UI/UX Product Design Specialist',
      type: 'Evening / Weekend',
      location: 'Kathmandu Campus',
      exp: '3+ Yrs Exp',
      desc: 'Facilitate design thinking workshops, Figma Auto Layout masterclasses, and portfolio reviews.'
    }
  ];

  perks = [
    { icon: 'fa-money-bill-trend-up', title: 'Top Industry Compensation', desc: 'Highly competitive hourly, per-batch, and monthly retainer compensation packages.' },
    { icon: 'fa-calendar-check', title: 'Ultra-Flexible Schedules', desc: 'Teach during morning (7-9 AM), evening (4-7 PM), or weekends without quitting your day job.' },
    { icon: 'fa-users', title: 'Mentorship Impact', desc: 'Directly shape the next generation of engineers and build your personal brand in Nepal’s tech ecosystem.' },
    { icon: 'fa-laptop-code', title: 'Modern Labs & Resources', desc: 'High-speed fiber connectivity, presentation rigs, lab infrastructure, and teaching assistants.' }
  ];

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Careers for Tech Tutors & Instructors | Join Techspark Academy',
      description: 'Teach with Techspark. Looking for Senior Software Engineers, AI Mentors, DevOps Trainers, and UI/UX Designers to lead batches in Kathmandu.',
      keywords: ['IT trainer jobs Kathmandu', 'teaching jobs for software engineers Nepal', 'part-time tech instructor vacancy Nepal'],
      canonicalUrl: 'https://techspark.edu.np/careers'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'Careers', path: '/careers' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }

  onSubmit(): void {
    if (this.tutorForm.invalid) {
      this.tutorForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const applicationId = 'TS-TUTOR-' + Math.floor(1000 + Math.random() * 9000);

    const appData: TutorApplication = {
      id: applicationId,
      ...this.tutorForm.value
    };

    setTimeout(() => {
      this.isSubmitting = false;
      this.applicationResult = appData;
      this.applicationSubmitted = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  }

  resetForm(): void {
    this.applicationSubmitted = false;
    this.applicationResult = undefined;
    this.tutorForm.reset({
      domain: 'MERN / Full-Stack Web Development',
      experienceYears: '3-5 Years',
      preferredShift: 'Evening (4:00 PM - 7:00 PM)',
      mode: 'Physical in Kathmandu'
    });
  }
}
