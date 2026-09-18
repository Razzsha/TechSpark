import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SuccessStory {
  initials: string;
  color: string;
  name: string;
  role: string;
  batch: string;
}

@Component({
  selector: 'app-success-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent {
  stories: SuccessStory[] = [
    { initials: 'SK', color: 'var(--indigo)', name: 'Sujata K.C.', role: 'Frontend Developer @ Palua Tech', batch: 'MERN Stack, 2025 batch' },
    { initials: 'BS', color: 'var(--teal-deep)', name: 'Bibek Shrestha', role: 'Jr. Python/AI Developer @ NextWave Labs', batch: 'Python with AI, 2025 batch' },
    { initials: 'AG', color: 'var(--spark-deep)', name: 'Anisha Gurung', role: 'Digital Marketing Executive @ Click Point Digital', batch: 'Digital Marketing, 2025 batch' },
    { initials: 'PL', color: '#6B4EE6', name: 'Prakash Lama', role: 'UI/UX Designer @ Studio Nine', batch: 'Frontend & UI/UX, 2024 batch' }
  ];
}
