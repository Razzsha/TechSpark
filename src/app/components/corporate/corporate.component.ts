import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-corporate',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {
  private fb = inject(FormBuilder);
  private seoService = inject(SeoService);

  seatsCount = 10;
  baseFeePerSeat = 25000;
  discountRate = 0.15;

  submitted = false;

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Corporate B2B IT Training & Tech Upskilling | Techspark Nepal',
      description: 'Custom corporate bootcamps, on-site developer workshops, and enterprise technology upskilling tailored to your company tech stack in Nepal.',
      keywords: ['corporate IT training Kathmandu', 'enterprise tech workshop Nepal', 'B2B developer upskilling'],
      canonicalUrl: 'https://techspark.edu.np/corporate'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'We Work For', path: '/' },
      { name: 'Corporate', path: '/corporate' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }

  corpForm: FormGroup = this.fb.group({
    companyName: ['', Validators.required],
    contactPerson: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    domain: ['Full Stack Development', Validators.required],
    seats: [10, Validators.required],
    requirements: ['']
  });

  calculatePrice(): void {
    const seats = Number(this.seatsCount) || 1;
    if (seats <= 5) {
      this.discountRate = 0;
    } else if (seats <= 15) {
      this.discountRate = 0.15;
    } else {
      this.discountRate = 0.25;
    }
  }

  get totalOriginal(): number {
    return (Number(this.seatsCount) || 1) * this.baseFeePerSeat;
  }

  get totalDiscounted(): number {
    return this.totalOriginal * (1 - this.discountRate);
  }

  get totalSavings(): number {
    return this.totalOriginal * this.discountRate;
  }

  onSubmit(): void {
    if (this.corpForm.valid) {
      this.submitted = true;
    } else {
      this.corpForm.markAllAsTouched();
    }
  }
}
