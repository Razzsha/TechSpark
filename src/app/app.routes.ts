import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Visiongrid | Premier IT Learning & Software Solutions',
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./components/courses/courses.component').then(
        (m) => m.CoursesComponent,
      ),
    title: 'Professional IT Courses | Visiongrid Academy',
  },
  {
    path: 'course/:id',
    loadComponent: () =>
      import('./components/course-detail/course-detail.component').then(
        (m) => m.CourseDetailComponent,
      ),
    title: 'Course Details | Visiongrid Academy',
  },
  {
    path: 'enroll',
    loadComponent: () =>
      import('./components/enroll/enroll.component').then(
        (m) => m.EnrollComponent,
      ),
    title: 'Online Admission & Course Enrollment | Visiongrid',
  },
  {
    path: 'verify-certificate',
    loadComponent: () =>
      import('./components/verify-certificate/verify-certificate.component').then(
        (m) => m.VerifyCertificateComponent,
      ),
    title: 'Online Certificate Verification | Visiongrid',
  },
  {
    path: 'career-quiz',
    loadComponent: () =>
      import('./components/career-quiz/career-quiz.component').then(
        (m) => m.CareerQuizComponent,
      ),
    title: 'Interactive Career Path Finder | Visiongrid',
  },
  {
    path: 'corporate',
    loadComponent: () =>
      import('./components/corporate/corporate.component').then(
        (m) => m.CorporateComponent,
      ),
    title: 'Corporate B2B Tech Training | Visiongrid',
  },
  {
    path: 'placements',
    loadComponent: () =>
      import('./components/placements/placements.component').then(
        (m) => m.PlacementsComponent,
      ),
    title: 'Graduate Placements & Hiring Partners | Visiongrid',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./components/services/services.component').then(
        (m) => m.ServicesComponent,
      ),
    title: 'IT & Software Development Services | Visiongrid',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent,
      ),
    title: 'About Us & Career Outcomes | Visiongrid',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
    title: 'Contact Us | Visiongrid Technology',
  },
  {
    path: 'counseling',
    loadComponent: () =>
      import('./components/counseling/counseling.component').then(
        (m) => m.CounselingComponent,
      ),
    title: 'Book a Free Tech & Career Consulting | Visiongrid',
  },
  {
    path: 'free-consulting',
    redirectTo: 'counseling',
  },
  {
    path: 'academic',
    loadComponent: () =>
      import('./components/academic/academic.component').then(
        (m) => m.AcademicComponent,
      ),
    title: 'Academic Partnerships & University Programs | Visiongrid',
  },
  {
    path: 'government',
    loadComponent: () =>
      import('./components/government/government.component').then(
        (m) => m.GovernmentComponent,
      ),
    title: 'GovTech & Public Sector Tech Training | Visiongrid',
  },
  {
    path: 'careers',
    loadComponent: () =>
      import('./components/careers/careers.component').then(
        (m) => m.CareersComponent,
      ),
    title: 'Careers & Tutor Vacancies | Visiongrid',
  },
  {
    path: 'mentors',
    loadComponent: () =>
      import('./components/mentors/mentors.component').then(
        (m) => m.MentorsComponent,
      ),
    title: 'Faculty & Industry Mentors | Visiongrid',
  },
  {
    path: 'campus-life',
    loadComponent: () =>
      import('./components/campus-life/campus-life.component').then(
        (m) => m.CampusLifeComponent,
      ),
    title: 'Campus Life & Innovation Labs | Visiongrid',
  },
  {
    path: 'why-us',
    loadComponent: () =>
      import('./components/why-us/why-us.component').then(
        (m) => m.WhyUsComponent,
      ),
    title: 'Why Choose Visiongrid | Premier IT Academy',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
