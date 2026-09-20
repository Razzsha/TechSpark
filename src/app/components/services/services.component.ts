import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  private fb = inject(FormBuilder);
  private seoService = inject(SeoService);

  modalOpen = false;
  quoteSubmitted = false;

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Custom Software Development & IT Services | Techspark Technology',
      description: 'End-to-end enterprise web portals, mobile apps (Flutter), Generative AI integration, and DevOps cloud infrastructure from Kathmandu, Nepal.',
      keywords: ['software development company Nepal', 'custom web app development Kathmandu', 'mobile app development Nepal', 'AI software studio'],
      canonicalUrl: 'https://techspark.edu.np/services'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }

  quoteForm: FormGroup = this.fb.group({
    clientName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    serviceType: ['Web Application Development', Validators.required],
    budget: ['$1,000 - $5,000', Validators.required],
    projectDetails: ['', Validators.required]
  });

  serviceList = [
    {
      id: 'web',
      title: 'Enterprise Web Development',
      desc: 'High-performance web portals, SaaS platforms, and enterprise solutions built using MERN, Angular, and Python/Django.',
      icon: 'fa-code',
      features: ['Single Page Applications', 'REST & GraphQL APIs', 'Database Optimization', 'Cloud Deployment']
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      desc: 'Cross-platform mobile applications for iOS and Android built using Flutter and React Native with native performance.',
      icon: 'fa-mobile-screen-button',
      features: ['Flutter & React Native', 'Offline Support', 'Push Notifications', 'App Store Publishing']
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning Solutions',
      desc: 'Generative AI chatbots, predictive data models, and computer vision integration for business workflow automation.',
      icon: 'fa-robot',
      features: ['Custom LLM Fine-Tuning', 'LangChain AI Agents', 'Data Pipeline Setup', 'Predictive Dashboards']
    },
    {
      id: 'design',
      title: 'UI/UX Design & Product Strategy',
      desc: 'User-centered product design, interactive wireframing, component design systems, and rapid prototyping in Figma.',
      icon: 'fa-pen-ruler',
      features: ['User Research & Personas', 'Interactive Figma Prototypes', 'Design System Architecture', 'Usability Audits']
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps Solutions',
      desc: 'Automate deployments, setup CI/CD pipelines, containerize microservices, and manage AWS/Kubernetes infrastructure.',
      icon: 'fa-cloud',
      features: ['Docker & Kubernetes', 'Jenkins & GitHub Actions', 'AWS Infrastructure', '24/7 Server Monitoring']
    },
    {
      id: 'consulting',
      title: 'IT Consulting & Code Audit',
      desc: 'Technical architecture consulting, legacy code refactoring, performance bottleneck tuning, and security vulnerability audits.',
      icon: 'fa-chart-pie',
      features: ['Codebase Refactoring', 'Security Audits', 'Performance Optimization', 'Technical Due Diligence']
    }
  ];

  openQuoteModal(serviceName?: string): void {
    if (serviceName) {
      this.quoteForm.patchValue({ serviceType: serviceName });
    }
    this.modalOpen = true;
    this.quoteSubmitted = false;
  }

  closeQuoteModal(): void {
    this.modalOpen = false;
  }

  submitQuote(): void {
    if (this.quoteForm.valid) {
      this.quoteSubmitted = true;
      setTimeout(() => {
        this.closeQuoteModal();
        this.quoteForm.reset();
      }, 2500);
    } else {
      this.quoteForm.markAllAsTouched();
    }
  }
}
