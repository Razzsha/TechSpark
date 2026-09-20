import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { SeoService } from '../../services/seo.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);
  private seoService = inject(SeoService);

  course: Course | undefined;
  activeTab: 'overview' | 'syllabus' | 'outcomes' | 'batches' = 'overview';
  openModuleIndex: number = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.courseService.getCourseByIdOrSlug(id).subscribe(c => {
          this.course = c;
          if (c) {
            this.seoService.setSeoData({
              title: `${c.title} Training Course Kathmandu | Techspark Academy`,
              description: `${c.subtitle}. Complete ${c.duration} hands-on curriculum with real capstone projects and placement assistance in Nepal.`,
              keywords: [
                c.title,
                `${c.title} Nepal`,
                `${c.title} syllabus and fee Kathmandu`,
                `${c.categoryLabel} training`,
                'Techspark Academy'
              ],
              canonicalUrl: `https://techspark.edu.np/course/${c.slug}`
            });

            const courseSchema = this.seoService.getCourseSchema(c);
            const breadcrumbs = this.seoService.getBreadcrumbsSchema([
              { name: 'Home', path: '/' },
              { name: 'Courses', path: '/courses' },
              { name: c.title, path: `/course/${c.slug}` }
            ]);
            this.seoService.setStructuredData([courseSchema, breadcrumbs]);
          }
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

  downloadBrochure(): void {
    window.print();
  }
}
