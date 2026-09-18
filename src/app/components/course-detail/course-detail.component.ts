import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;
  activeTab: 'overview' | 'syllabus' | 'outcomes' | 'batches' = 'overview';
  openModuleIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.courseService.getCourseByIdOrSlug(id).subscribe(c => {
          this.course = c;
        });
      }
    });
  }

  setTab(tab: 'overview' | 'syllabus' | 'outcomes' | 'batches'): void {
    this.activeTab = tab;
  }

  toggleModule(index: number): void {
    if (this.openModuleIndex === index) {
      this.openModuleIndex = -1;
    } else {
      this.openModuleIndex = index;
    }
  }
}
