import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corporate',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent {
  private fb = inject(FormBuilder);

  seatsCount = 10;
  baseFeePerSeat = 25000;
  discountRate = 0.15;

  submitted = false;

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
