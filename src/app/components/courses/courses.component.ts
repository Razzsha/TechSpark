import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course, CourseCategory } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
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

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
