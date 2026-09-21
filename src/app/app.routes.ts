import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Techspark | Premier IT Learning & Software Solutions'
  },
  {
    path: 'courses',
    loadComponent: () => import('./components/courses/courses.component').then(m => m.CoursesComponent),
    title: 'Professional IT Courses | Techspark Academy'
  },
  {
    path: 'course/:id',
    loadComponent: () => import('./components/course-detail/course-detail.component').then(m => m.CourseDetailComponent),
    title: 'Course Details | Techspark Academy'
  },
  {
    path: 'enroll',
    loadComponent: () => import('./components/enroll/enroll.component').then(m => m.EnrollComponent),
    title: 'Online Admission & Course Enrollment | Techspark'
  },
  {
    path: 'verify-certificate',
    loadComponent: () => import('./components/verify-certificate/verify-certificate.component').then(m => m.VerifyCertificateComponent),
    title: 'Online Certificate Verification | Techspark'
  },
  {
    path: 'career-quiz',
    loadComponent: () => import('./components/career-quiz/career-quiz.component').then(m => m.CareerQuizComponent),
    title: 'Interactive Career Path Finder | Techspark'
  },
  {
    path: 'corporate',
    loadComponent: () => import('./components/corporate/corporate.component').then(m => m.CorporateComponent),
    title: 'Corporate B2B Tech Training | Techspark'
  },
  {
    path: 'placements',
    loadComponent: () => import('./components/placements/placements.component').then(m => m.PlacementsComponent),
    title: 'Graduate Placements & Hiring Partners | Techspark'
  },
  {
    path: 'services',
    loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent),
    title: 'IT & Software Development Services | Techspark'
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent),
    title: 'About Us & Career Outcomes | Techspark'
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Techspark Technology'
  },
  {
    path: 'counseling',
    loadComponent: () => import('./components/counseling/counseling.component').then(m => m.CounselingComponent),
    title: 'Book a Free Tech & Career Consulting | Techspark'
  },
  {
    path: 'free-consulting',
    redirectTo: 'counseling'
  },
  {
    path: 'academic',
    loadComponent: () => import('./components/academic/academic.component').then(m => m.AcademicComponent),
    title: 'Academic Partnerships & University Programs | Techspark'
  },
  {
    path: 'government',
    loadComponent: () => import('./components/government/government.component').then(m => m.GovernmentComponent),
    title: 'GovTech & Public Sector Tech Training | Techspark'
  },
  {
    path: 'careers',
    loadComponent: () => import('./components/careers/careers.component').then(m => m.CareersComponent),
    title: 'Careers & Tutor Vacancies | Techspark'
  },
  {
    path: 'mentors',
    loadComponent: () => import('./components/mentors/mentors.component').then(m => m.MentorsComponent),
    title: 'Faculty & Industry Mentors | Techspark'
  },
  {
    path: 'campus-life',
    loadComponent: () => import('./components/campus-life/campus-life.component').then(m => m.CampusLifeComponent),
    title: 'Campus Life & Innovation Labs | Techspark'
  },
  {
    path: 'why-us',
    loadComponent: () => import('./components/why-us/why-us.component').then(m => m.WhyUsComponent),
    title: 'Why Choose Techspark | Premier IT Academy'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
