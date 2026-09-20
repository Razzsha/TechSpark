import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'Academic Partnerships & College IT Bootcamps | Techspark Nepal',
      description: 'Techspark partners with colleges and universities to provide industry-standard student finish-school bootcamps, faculty development, and placement drives.',
      keywords: ['college IT training Nepal', 'university tech partnership Kathmandu', 'student coding bootcamp Nepal'],
      canonicalUrl: 'https://techspark.edu.np/academic'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'We Work For', path: '/' },
      { name: 'Academic', path: '/academic' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }
  programs = [
    {
      title: 'College & University MoUs',
      icon: 'fa-graduation-cap',
      desc: 'Industry-integrated academic syllabus enhancement, guest tech lectures, and final-year capstone project mentoring for CS, IT, and Engineering colleges.'
    },
    {
      title: 'Student Finishing School Bootcamps',
      icon: 'fa-laptop-code',
      desc: 'Hands-on intensive semester-break bootcamps in Full-Stack, AI, DevOps, and Mobile App development bridging academia with industry demands.'
    },
    {
      title: 'Faculty Development Programs (FDP)',
      icon: 'fa-chalkboard-user',
      desc: 'Upskilling professors and lecturers on modern frameworks, cloud architectures, Generative AI tools, and enterprise testing standards.'
    },
    {
      title: 'Campus Placement & Internship Drives',
      icon: 'fa-building-columns',
      desc: 'Direct placement pipelines connecting graduating students with top tech employers and software houses across Nepal and international remote hubs.'
    }
  ];

  stats = [
    { value: '25+', label: 'Partner Colleges & Universities' },
    { value: '6,500+', label: 'College Students Mentored' },
    { value: '40+', label: 'Workshops & Hackathons Hosted' },
    { value: '92%', label: 'Graduate Internship Conversion' }
  ];
}
