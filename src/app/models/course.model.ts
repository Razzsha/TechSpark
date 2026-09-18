export type CourseCategory = 'all' | 'ai-data' | 'web-dev' | 'mobile' | 'security-devops' | 'design' | 'marketing';

export interface SyllabusModule {
  title: string;
  topics: string[];
}

export interface CourseBatch {
  startDate: string;
  timing: string;
  mode: 'Physical' | 'Online' | 'Hybrid';
  status: 'Filling Fast' | 'Available' | 'Upcoming';
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<CourseCategory, 'all'>;
  categoryLabel: string;
  tag: 'Popular' | 'Hot' | 'New' | 'Job-ready' | 'Trending';
  badgeColor: 'blue' | 'red' | 'gold' | 'green' | 'purple';
  duration: string;
  mode: string;
  level: string;
  rating: number;
  ratingCount: number;
  studentsCount: number;
  price: number;
  originalPrice: number;
  discountBadge?: string;
  shortDescription: string;
  fullDescription: string;
  overview: string[];
  prerequisites: string[];
  careerOutcomes: string[];
  keyHighlights: string[];
  syllabus: SyllabusModule[];
  upcomingBatches: CourseBatch[];
  icon: string;
}

export interface EnrollmentRequest {
  id?: string;
  courseId: string;
  courseTitle: string;
  trainingMode: 'Physical' | 'Online Live Class';
  preferredShift: 'Morning (7:00 AM - 9:00 AM)' | 'Day (11:00 AM - 1:00 PM)' | 'Evening (4:00 PM - 6:00 PM)';
  fullName: string;
  email: string;
  phone: string;
  city: string;
  qualification: string;
  experienceLevel: string;
  comments?: string;
  submittedAt?: string;
}
