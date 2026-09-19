import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent {
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
