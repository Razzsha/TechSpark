import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  initials: string;
  color: string;
  quote: string;
  who: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    { initials: 'RS', color: 'var(--indigo)', quote: 'I joined the MERN Stack course knowing nothing about code. Four months later I had three real projects to show in interviews.', who: 'Past Academy student' },
    { initials: 'MP', color: 'var(--teal-deep)', quote: 'Tech Spark rebuilt our booking system in under two months and actually explained the decisions instead of just handing over code.', who: 'Local business client' },
    { initials: 'DL', color: 'var(--spark-deep)', quote: 'The mentors are people who build software for a living, so the feedback felt like a real code review, not a classroom exercise.', who: 'Frontend & UI/UX graduate' }
  ];

  activeIndex = 0;
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.show((this.activeIndex + 1) % this.testimonials.length);
      }
    }, 6000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  show(index: number): void {
    this.activeIndex = index;
  }
}
