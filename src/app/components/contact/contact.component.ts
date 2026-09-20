import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private seoService = inject(SeoService);

  contactSubmitted = false;

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Contact Us & Campus Location | Techspark Academy Kathmandu',
      description: 'Visit our Kathmandu campus or reach out via phone, email, and WhatsApp for admissions, student counseling, and corporate tech training.',
      keywords: ['Techspark contact number', 'Techspark location Kathmandu', 'IT institute contact Nepal'],
      canonicalUrl: 'https://techspark.edu.np/contact'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact Us', path: '/contact' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    subject: ['General Inquiry', Validators.required],
    message: ['', Validators.required]
  });

  contactInfo = [
    { title: 'Institute Address', line1: 'Tinkune, Subidhanagar (Near Ring Road Bridge)', line2: 'Kathmandu, Nepal', icon: 'fa-location-dot' },
    { title: 'Phone Hotline', line1: '+977-1-4500000', line2: '+977-9800000000', icon: 'fa-phone' },
    { title: 'Email Contact', line1: 'info@techspark.com.np', line2: 'admissions@techspark.com.np', icon: 'fa-envelope' },
    { title: 'Working Hours', line1: 'Sunday - Friday: 6:30 AM - 7:00 PM', line2: 'Saturday: Closed / Events', icon: 'fa-clock' }
  ];

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactSubmitted = true;
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
