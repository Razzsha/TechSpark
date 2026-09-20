import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

export interface CounselingBooking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  currentStatus: string;
  domainInterest: string;
  sessionMode: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  bookedAt: string;
}

@Component({
  selector: 'app-counseling',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './counseling.component.html',
  styleUrls: ['./counseling.component.css']
})
export class CounselingComponent implements OnInit {
  private fb = inject(FormBuilder);
  private seoService = inject(SeoService);

  isSubmitting = false;
  bookingSubmitted = false;
  bookingResult?: CounselingBooking;

  counselingForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9+ -]{8,15}$')]],
    city: ['Kathmandu', Validators.required],
    currentStatus: ['Undergraduate / College Student', Validators.required],
    domainInterest: ['Full-Stack Web Development (MERN / Python)', Validators.required],
    sessionMode: ['Online 1-on-1 Google Meet', Validators.required],
    preferredDate: ['', Validators.required],
    preferredTime: ['Morning (10:00 AM - 12:00 PM)', Validators.required],
    notes: ['']
  });

  statusOptions = [
    '+2 / High School Student',
    'Undergraduate / College Student',
    'Fresh IT / Non-IT Graduate',
    'Working Professional Looking to Upskill',
    'Career Switcher from Non-Tech'
  ];

  domainOptions = [
    'Full-Stack Web Development (MERN / Python / Java)',
    'AI, Machine Learning & Generative AI',
    'Flutter & Cross-Platform Mobile Apps',
    'DevOps, Cloud Computing (AWS) & Docker',
    'Cybersecurity & Network Defense',
    'UI/UX Design Masterclass with Figma',
    'Digital Marketing 360° & SEO',
    'Corporate & B2B Team Upskilling',
    'Undecided (Need General Career Advice)'
  ];

  timeSlots = [
    'Morning (10:00 AM - 12:00 PM)',
    'Afternoon (1:00 PM - 3:00 PM)',
    'Evening (4:00 PM - 6:00 PM)',
    'Flexible (Any Available Slot)'
  ];

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Book a Free 1-on-1 Tech & Career Counseling Session | Techspark',
      description: 'Get free expert career advice from senior software engineers. Discuss course roadmaps, career transitions, salary expectations, and placement assistance in Nepal.',
      keywords: ['free IT counseling Nepal', 'career guidance Kathmandu', 'IT courses consulting', 'career switch to tech Nepal'],
      canonicalUrl: 'https://techspark.edu.np/counseling'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'Free Consulting', path: '/counseling' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);

    // Default preferred date to tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    this.counselingForm.patchValue({ preferredDate: dateStr });
  }

  onSubmit(): void {
    if (this.counselingForm.invalid) {
      this.counselingForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const bookingId = 'TS-CNS-' + Math.floor(100000 + Math.random() * 900000);

    const bookingData: CounselingBooking = {
      id: bookingId,
      ...this.counselingForm.value,
      bookedAt: new Date().toISOString()
    };

    setTimeout(() => {
      this.isSubmitting = false;
      this.bookingResult = bookingData;
      this.bookingSubmitted = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  }

  resetForm(): void {
    this.bookingSubmitted = false;
    this.bookingResult = undefined;
    this.counselingForm.reset({
      city: 'Kathmandu',
      currentStatus: 'Undergraduate / College Student',
      domainInterest: 'Full-Stack Web Development (MERN / Python)',
      sessionMode: 'Online 1-on-1 Google Meet',
      preferredTime: 'Morning (10:00 AM - 12:00 PM)'
    });
  }
}
