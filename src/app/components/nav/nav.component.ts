import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  themeService = inject(ThemeService);
  langService = inject(LanguageService);

  mobileOpen = false;
  dropdownOpen = false;
  workForDropdownOpen = false;
  servicesDropdownOpen = false;
  aboutDropdownOpen = false;
  isScrolled = false;

  weWorkForLinks = [
    { label: 'Academic', route: '/academic', desc: 'Colleges, Universities & Bootcamps', icon: 'fa-graduation-cap' },
    { label: 'Corporate', route: '/corporate', desc: 'Enterprise Upskilling & B2B Training', icon: 'fa-building' },
    { label: 'Government', route: '/government', desc: 'GovTech, Digital Nepal & Public Sector', icon: 'fa-landmark' }
  ];

  categoryLinks = [
    { label: 'All Professional Courses', route: '/courses', queryParams: { category: 'all' } },
    { label: 'AI & Data Science', route: '/courses', queryParams: { category: 'ai-data' } },
    { label: 'Web & Software Development', route: '/courses', queryParams: { category: 'web-dev' } },
    { label: 'Mobile App Development', route: '/courses', queryParams: { category: 'mobile' } },
    { label: 'Security & DevOps', route: '/courses', queryParams: { category: 'security-devops' } },
    { label: 'Design & UI/UX', route: '/courses', queryParams: { category: 'design' } },
    { label: 'Digital Marketing', route: '/courses', queryParams: { category: 'marketing' } }
  ];

  serviceLinks = [
    { label: 'Enterprise Web Apps', route: '/services', desc: 'SaaS, MERN, Angular & Django systems', icon: 'fa-code' },
    { label: 'Mobile App Development', route: '/services', desc: 'Flutter & React Native iOS/Android', icon: 'fa-mobile-screen-button' },
    { label: 'AI & Machine Learning', route: '/services', desc: 'GenAI, LLMs, Agents & NLP models', icon: 'fa-robot' },
    { label: 'UI/UX & Product Design', route: '/services', desc: 'Figma design systems & user testing', icon: 'fa-pen-ruler' },
    { label: 'Cloud & DevOps Solutions', route: '/services', desc: 'AWS, Docker, K8s & CI/CD pipelines', icon: 'fa-cloud' },
    { label: 'IT Consulting & Code Audit', route: '/services', desc: 'Architecture review & security audit', icon: 'fa-chart-pie' }
  ];

  aboutLinks = [
    { label: 'Our Story & Vision', route: '/about', desc: 'Mission, leadership & our tech legacy', icon: 'fa-building-columns' },
    { label: 'Faculty & Mentors', route: '/mentors', desc: 'Senior practicing engineers & scientists', icon: 'fa-chalkboard-user' },
    // { label: 'Campus Life & Labs', route: '/campus-life', desc: 'Innovation hubs, workstations & hackathons', icon: 'fa-laptop-code' },
    { label: 'Why Techspark', route: '/why-us', desc: '92% placement rate & verifiable credentials', icon: 'fa-shield-heart' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile(): void {
    this.mobileOpen = false;
  }

  toggleDropdown(open?: boolean): void {
    this.dropdownOpen = open !== undefined ? open : !this.dropdownOpen;
  }

  toggleWorkForDropdown(open?: boolean): void {
    this.workForDropdownOpen = open !== undefined ? open : !this.workForDropdownOpen;
  }

  toggleServicesDropdown(open?: boolean): void {
    this.servicesDropdownOpen = open !== undefined ? open : !this.servicesDropdownOpen;
  }

  toggleAboutDropdown(open?: boolean): void {
    this.aboutDropdownOpen = open !== undefined ? open : !this.aboutDropdownOpen;
  }

  t(key: string): string {
    return this.langService.translate(key);
  }
}
