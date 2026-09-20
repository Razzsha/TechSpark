import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { SeoService } from '../../services/seo.service';
import { Course, EnrollmentRequest } from '../../models/course.model';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  private fb = inject(FormBuilder);
  private courseService = inject(CourseService);
  private enrollmentService = inject(EnrollmentService);
  private seoService = inject(SeoService);
  private route = inject(ActivatedRoute);

  currentStep = 1;
  coursesList: Course[] = [];
  selectedCourseDetail?: Course;
  isSubmitting = false;
  submissionResult?: { success: boolean; applicationId: string };

  enrollForm: FormGroup = this.fb.group({
    courseId: ['', Validators.required],
    trainingMode: ['Physical', Validators.required],
    preferredShift: ['Morning (7:00 AM - 9:00 AM)', Validators.required],
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9+ -]{8,15}$')]],
    city: ['Kathmandu', Validators.required],
    qualification: ['Undergraduate / Bachelor', Validators.required],
    experienceLevel: ['Beginner (No experience)', Validators.required],
    comments: ['']
  });

  shifts = [
    'Morning (7:00 AM - 9:00 AM)',
    'Day (11:00 AM - 1:00 PM)',
    'Evening (4:00 PM - 6:00 PM)'
  ];

  qualifications = [
    '+2 / High School',
    'Undergraduate / Bachelor',
    'Graduate / Master',
    'Working Professional'
  ];

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Online Admission & Course Enrollment | Techspark Academy Nepal',
      description: 'Apply online for upcoming morning, day, and evening IT batches in Kathmandu. Instant application tracking and flexible seat reservation.',
      keywords: ['IT course admission Kathmandu', 'enroll software training Nepal', 'Techspark enrollment online'],
      canonicalUrl: 'https://techspark.edu.np/enroll'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'Enroll', path: '/enroll' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);

    this.courseService.getCourses().subscribe(courses => {
      this.coursesList = courses;

      // Check query param
      this.route.queryParams.subscribe(params => {
        const preCourse = params['course'];
        if (preCourse) {
          const matched = courses.find(c => c.id === preCourse || c.slug === preCourse);
          if (matched) {
            this.enrollForm.patchValue({ courseId: matched.id });
            this.selectedCourseDetail = matched;
          }
        } else if (courses.length > 0) {
          this.enrollForm.patchValue({ courseId: courses[0].id });
          this.selectedCourseDetail = courses[0];
        }
      });
    });

    this.enrollForm.get('courseId')?.valueChanges.subscribe(id => {
      this.selectedCourseDetail = this.coursesList.find(c => c.id === id);
    });
  }

  nextStep(): void {
    if (this.currentStep === 1) {
      if (this.enrollForm.get('courseId')?.valid && this.enrollForm.get('trainingMode')?.valid) {
        this.currentStep = 2;
      }
    }
  }

  prevStep(): void {
    if (this.currentStep === 2) {
      this.currentStep = 1;
    }
  }

  onSubmit(): void {
    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const req: EnrollmentRequest = {
      ...this.enrollForm.value,
      courseTitle: this.selectedCourseDetail?.title || 'Selected Course'
    };

    this.enrollmentService.submitEnrollment(req).subscribe(res => {
      this.isSubmitting = false;
      this.submissionResult = res;
      this.currentStep = 3;
    });
  }
}
