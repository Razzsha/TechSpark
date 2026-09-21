import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-campus-life',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './campus-life.component.html',
  styleUrls: ['./campus-life.component.css']
})
export class CampusLifeComponent implements OnInit {
  private seoService = inject(SeoService);

  facilities = [
    {
      title: 'High-Performance Mac & Linux Labs',
      desc: 'Equipped with dedicated workstation machines, dual displays, ultra-high-speed fiber network, and pre-configured Docker environments.',
      icon: 'fa-desktop'
    },
    {
      title: 'Hackathons & 48-Hour Code Sprints',
      desc: 'Regular weekend sprint challenges where cohorts build working SaaS MVP prototypes with real prizes and venture mentorship.',
      icon: 'fa-trophy'
    },
    {
      title: 'Industry Fireside Chats & Tech Meetups',
      desc: 'Weekly evening guest sessions with CTOs, engineering managers, and overseas remote developers sharing industry trends.',
      icon: 'fa-microphone'
    },
    {
      title: 'Collaborative Open Co-Working Lounges',
      desc: 'Dedicated brainstorming spaces with whiteboards, ergonomic seating, presentation pods, and limitless coffee & tea.',
      icon: 'fa-mug-hot'
    },
    {
      title: 'Dedicated Job Placement & Career Cell',
      desc: 'Full-time HR & career counseling team offering daily 1-on-1 resume optimization, mock coding interviews, and referral setups.',
      icon: 'fa-briefcase'
    },
    {
      title: 'AI & IoT Sandbox Laboratory',
      desc: 'Hardware prototyping kits, GPU compute server access for AI model training, and embedded robotics testbenches.',
      icon: 'fa-microchip'
    }
  ];

  gallery = [
    { title: 'Interactive Coding Cohort Session', tag: 'Classrooms', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop' },
    { title: 'Weekend Hackathon Presentations', tag: 'Hackathons', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop' },
    { title: '1-on-1 Code Review & Mentorship', tag: 'Mentorship', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop' },
    { title: 'Graduation & Placement Day', tag: 'Milestones', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop' }
  ];

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Campus Life & Innovation Labs | Techspark Academy',
      description: 'Experience the dynamic campus life at Techspark: modern computer labs, weekend hackathons, industry tech meetups, and dedicated co-working spaces.',
      keywords: ['Techspark campus Kathmandu', 'coding bootcamp life Nepal', 'IT training lab facilities Kathmandu'],
      canonicalUrl: 'https://techspark.edu.np/campus-life'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Campus Life', path: '/campus-life' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }
}
