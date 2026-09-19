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
    if (open !== undefined) {
      this.dropdownOpen = open;
    } else {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }

  toggleWorkForDropdown(open?: boolean): void {
    if (open !== undefined) {
      this.workForDropdownOpen = open;
    } else {
      this.workForDropdownOpen = !this.workForDropdownOpen;
    }
  }

  t(key: string): string {
    return this.langService.translate(key);
  }
}
