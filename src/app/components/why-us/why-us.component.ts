import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements OnInit {
  private seoService = inject(SeoService);

  pillars = [
    {
      title: 'Industry-Standard Project Workflows',
      desc: 'No generic textbook examples. Every student builds enterprise microservices, AI integrations, or responsive web apps utilizing Git PR reviews and CI/CD pipelines.',
      icon: 'fa-diagram-project'
    },
    {
      title: 'Direct Hiring Network & 92% Placement Rate',
      desc: 'Our dedicated corporate placement cell actively connects graduates with 120+ top hiring partners across Nepal, India, and overseas remote tech companies.',
      icon: 'fa-briefcase'
    },
    {
      title: 'Small Cohorts with 1-on-1 Debugging Support',
      desc: 'We cap cohorts at 15-20 students to ensure every individual gets immediate debugging help, architecture reviews, and personalized mentor time.',
      icon: 'fa-users-gear'
    },
    {
      title: 'Globally Verifiable QR Digital Credentials',
      desc: 'All course graduates receive cryptographically verifiable digital certificates with permanent verification URLs and QR codes for LinkedIn and resume validation.',
      icon: 'fa-award'
    },
    {
      title: 'Lifetime Alumni Network & Tech Community',
      desc: 'Gain permanent access to our Discord community, exclusive alumni tech events, job referrals, and discounted masterclasses.',
      icon: 'fa-network-wired'
    },
    {
      title: 'Zero-Risk Demo & Flexible Payment Plans',
      desc: 'Experience our classes risk-free with demo sessions and flexible installment payment options designed for students and working professionals.',
      icon: 'fa-shield-check'
    }
  ];

  stats = [
    { value: '5,000+', label: 'Engineers Trained' },
    { value: '92%', label: 'Placement Rate' },
    { value: '120+', label: 'Hiring Partners' },
    { value: '4.9/5', label: 'Student Rating' }
  ];

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Why Choose Techspark | Premier IT Academy & Tech Partner',
      description: 'Discover why Techspark is Nepal’s highest-rated IT academy: industry mentors, 92% placement rate, small cohorts, and verifiable certificates.',
      keywords: ['why choose Techspark', 'best IT institute Kathmandu', 'top coding bootcamp Nepal'],
      canonicalUrl: 'https://techspark.edu.np/why-us'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Why Us', path: '/why-us' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }
}
