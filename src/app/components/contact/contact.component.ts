import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  contactSubmitted = false;

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
