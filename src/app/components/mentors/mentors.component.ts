import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

export interface Mentor {
  name: string;
  role: string;
  company: string;
  experience: string;
  domain: string;
  image: string;
  skills: string[];
  bio: string;
}

@Component({
  selector: 'app-mentors',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  private seoService = inject(SeoService);

  activeFilter = 'all';

  mentors: Mentor[] = [
    {
      name: 'Rohan Shrestha',
      role: 'Principal Full-Stack Architect',
      company: 'Ex-Lead Tech Architect',
      experience: '9+ Years Exp',
      domain: 'web',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
      skills: ['React 18', 'Node.js', 'Next.js', 'Microservices', 'GraphQL'],
      bio: 'Architected high-scale fintech systems handling 1M+ daily transactions. Mentored 800+ full-stack engineers.'
    },
    {
      name: 'Dr. Pratima Adhikari',
      role: 'Lead AI & Machine Learning Scientist',
      company: 'AI Research Institute',
      experience: '8+ Years Exp',
      domain: 'ai',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
      skills: ['PyTorch', 'LangChain', 'LLMs', 'Computer Vision', 'Python'],
      bio: 'PhD in Applied Machine Learning. Specializes in building Generative AI agents, RAG pipelines, and enterprise NLP models.'
    },
    {
      name: 'Bikash Thapa',
      role: 'DevOps & Cloud Infrastructure Lead',
      company: 'AWS Certified Solutions Architect',
      experience: '7+ Years Exp',
      domain: 'cloud',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
      skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
      bio: 'Manages multi-region cloud infrastructures on AWS and Kubernetes. Passioned about zero-downtime deployments.'
    },
    {
      name: 'Suman KC',
      role: 'Staff Mobile Engineer (Flutter/iOS)',
      company: 'Global Mobile Studio',
      experience: '6+ Years Exp',
      domain: 'mobile',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces',
      skills: ['Flutter', 'Dart', 'iOS Swift', 'BLoC Architecture', 'Firebase'],
      bio: 'Shipped 15+ top-ranked iOS and Android apps with 5M+ combined downloads. Passionate about 60fps smooth animations.'
    },
    {
      name: 'Anjali Poudel',
      role: 'Lead UI/UX & Product Design Specialist',
      company: 'Ex-Design Lead',
      experience: '6+ Years Exp',
      domain: 'design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
      skills: ['Figma Design Systems', 'UX Research', 'Design Thinking', 'Prototyping'],
      bio: 'Helped 20+ startups build scalable design systems from scratch. Focuses on intuitive user journeys and accessibility.'
    },
    {
      name: 'Kiran Maharjan',
      role: 'Cybersecurity & Ethical Hacking Consultant',
      company: 'CEH & CISSP Certified',
      experience: '7+ Years Exp',
      domain: 'security',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
      skills: ['VAPT', 'Network Security', 'OWASP Top 10', 'SOC Analysis', 'Linux'],
      bio: 'Conducts vulnerability assessments and security audits for financial institutions and public cloud providers.'
    }
  ];

  filteredMentors: Mentor[] = this.mentors;

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Our Industry Mentors & Instructors | Techspark Academy',
      description: 'Learn from Senior Software Engineers, AI Scientists, and DevOps Architects currently working in top tech companies.',
      keywords: ['tech mentors Nepal', 'software engineering instructors Kathmandu', 'learn from IT professionals Nepal'],
      canonicalUrl: 'https://techspark.edu.np/mentors'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Mentors', path: '/mentors' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }

  filterDomain(domain: string): void {
    this.activeFilter = domain;
    if (domain === 'all') {
      this.filteredMentors = this.mentors;
    } else {
      this.filteredMentors = this.mentors.filter(m => m.domain === domain);
    }
  }
}
