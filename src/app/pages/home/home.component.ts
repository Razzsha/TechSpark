import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { HeroComponent } from '../../components/hero/hero.component';
import { LogoMarqueeComponent } from '../../components/logo-marquee/logo-marquee.component';
import { ProcessComponent } from '../../components/process/process.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroComponent,
    LogoMarqueeComponent,
    ProcessComponent,
    TestimonialsComponent,
    FaqComponent,
    CtaBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredCourses: Course[] = [];

  stats = [
    { value: '15,000+', label: 'Graduates Trained', icon: 'fa-user-graduate' },
    { value: '94%', label: 'Job Placement Rate', icon: 'fa-briefcase' },
    { value: '120+', label: 'Corporate Hiring Partners', icon: 'fa-building' },
    { value: '4.9★', label: 'Student Satisfaction Score', icon: 'fa-star' }
  ];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getFeaturedCourses().subscribe(courses => {
      this.featuredCourses = courses;
    });
  }
}
