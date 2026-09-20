import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { SeoService } from '../../services/seo.service';
import { Course, CourseCategory } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  private courseService = inject(CourseService);
  private seoService = inject(SeoService);
  private route = inject(ActivatedRoute);

  courses: Course[] = [];
  filteredCourses: Course[] = [];
  activeCategory: CourseCategory = 'all';
  searchTerm: string = '';

  categories: { key: CourseCategory; label: string; icon: string }[] = [
    { key: 'all', label: 'All Courses', icon: 'fa-border-all' },
    { key: 'web-dev', label: 'Web & Software', icon: 'fa-code' },
    { key: 'ai-data', label: 'AI & Data Science', icon: 'fa-brain' },
    { key: 'mobile', label: 'Mobile App', icon: 'fa-mobile-screen' },
    { key: 'security-devops', label: 'Security & DevOps', icon: 'fa-shield-halved' },
    { key: 'design', label: 'Design & UI/UX', icon: 'fa-pen-nib' },
    { key: 'marketing', label: 'Digital Marketing', icon: 'fa-bullhorn' }
  ];

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Professional IT & Software Courses in Kathmandu | Techspark Academy',
      description: 'Explore Nepal’s leading IT programs: MERN Stack, Python Machine Learning & AI, AWS DevOps, Flutter iOS/Android, and Figma UI/UX Design.',
      keywords: ['IT courses in Nepal', 'programming training Kathmandu', 'best web development course Nepal', 'AI training Kathmandu'],
      canonicalUrl: 'https://techspark.edu.np/courses'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'Courses', path: '/courses' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);

    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.activeCategory = params['category'] as CourseCategory;
      }
      this.loadCourses();
    });
  }

  loadCourses(): void {
    this.courseService.filterCourses(this.activeCategory, this.searchTerm).subscribe(list => {
      this.filteredCourses = list;
    });
  }

  setCategory(cat: CourseCategory): void {
    this.activeCategory = cat;
    this.loadCourses();
  }

  onSearchChange(): void {
    this.loadCourses();
  }
}
