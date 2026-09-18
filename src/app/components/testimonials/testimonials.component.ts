import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  initials: string;
  color: string;
  quote: string;
  who: string;
  videoTitle?: string;
  hasVideo?: boolean;
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
    {
      initials: 'RS',
      color: 'var(--indigo)',
      quote: 'I joined the MERN Stack course with zero coding background. Four months later I built full-stack SaaS apps and passed Leapfrog technical rounds.',
      who: 'Rohan Sharma — Full Stack Developer',
      videoTitle: 'Rohan\'s MERN Stack Placement Journey',
      hasVideo: true
    },
    {
      initials: 'MP',
      color: 'var(--teal-deep)',
      quote: 'Techspark delivered our corporate booking portal under 2 months with pristine React 18 architecture and high test coverage.',
      who: 'Manish Shrestha — CEO, TravelTech Nepal',
      videoTitle: 'TravelTech Enterprise Software Review',
      hasVideo: true
    },
    {
      initials: 'DL',
      color: 'var(--spark-deep)',
      quote: 'The mentors are active senior software architects. The code reviews felt like real production engineering, not textbook exercises.',
      who: 'Dipesh Lama — Senior AI & Python Developer',
      videoTitle: 'Dipesh\'s Transition to AI Engineering',
      hasVideo: true
    }
  ];

  activeIndex = 0;
  videoModalOpen = false;
  activeVideoTitle = '';
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      if (!this.videoModalOpen && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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

  openVideoModal(title?: string): void {
    this.activeVideoTitle = title || 'Student Success Story Video';
    this.videoModalOpen = true;
  }

  closeVideoModal(): void {
    this.videoModalOpen = false;
  }
}
