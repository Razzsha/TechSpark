import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-placements',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {
  private fb = inject(FormBuilder);
  private seoService = inject(SeoService);

  recruiterSubmitted = false;

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Graduate Placements, Hiring Network & Success Stories | Techspark',
      description: '94% Placement Rate. See where Techspark alumni work — Leapfrog, F1Soft, Deerhold, Fusemachines, and hire certified developers.',
      keywords: ['IT job placements Kathmandu', 'hire developers Nepal', 'Techspark alumni reviews and success stories'],
      canonicalUrl: 'https://techspark.edu.np/placements'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'Placements', path: '/placements' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }

  recruiterForm: FormGroup = this.fb.group({
    companyName: ['', Validators.required],
    recruiterName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    rolesNeeded: ['MERN / React Developer', Validators.required],
    count: [2, Validators.required]
  });

  hiringPartners = [
    { name: 'Leapfrog Technology', type: 'US Tech Enterprise' },
    { name: 'F1Soft International', type: 'Fintech Pioneer' },
    { name: 'Deerhold Nepal', type: 'Healthcare Tech' },
    { name: 'Fusemachines AI', type: 'AI & Data Firm' },
    { name: 'Cotiviti Nepal', type: 'Healthcare Analytics' },
    { name: 'eSewa Payment', type: 'Digital Wallet' }
  ];

  alumni = [
    {
      name: 'Prashant Thapa',
      role: 'Frontend Engineer',
      company: 'Leapfrog Technology',
      course: 'MERN Stack Development',
      package: 'NPR 5.2 L / Yr',
      quote: 'The practical capstone projects at Techspark gave me the exact skills needed to clear Leapfrog technical rounds.'
    },
    {
      name: 'Suman Shrestha',
      role: 'Django Backend Engineer',
      company: 'F1Soft International',
      course: 'Python & Django Full Stack',
      package: 'NPR 4.8 L / Yr',
      quote: 'Learning PostgreSQL database architecture and REST API development directly under industry mentors changed my career.'
    },
    {
      name: 'Anjali Shah',
      role: 'UI/UX Product Designer',
      company: 'Fusemachines',
      course: 'UI/UX Design Masterclass',
      package: 'NPR 4.2 L / Yr',
      quote: 'Figma Auto Layout and Design Systems training helped me build a professional Behance portfolio that got me hired.'
    }
  ];

  onSubmit(): void {
    if (this.recruiterForm.valid) {
      this.recruiterSubmitted = true;
    } else {
      this.recruiterForm.markAllAsTouched();
    }
  }
}
