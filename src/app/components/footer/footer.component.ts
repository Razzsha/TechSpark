import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  topCourses = [
    { label: 'MERN Stack Development', route: '/course/mern-stack-development' },
    { label: 'Python & Django Full Stack', route: '/course/python-django-fullstack' },
    { label: 'AI with Python & ML', route: '/course/ai-python-machine-learning' },
    { label: 'Flutter Mobile App Dev', route: '/course/flutter-crossplatform-mobile' },
    { label: 'DevOps & AWS Cloud', route: '/course/devops-cloud-aws-kubernetes' },
    { label: 'Cybersecurity & Pen Testing', route: '/course/cyber-security-ethical-hacking' }
  ];
}
