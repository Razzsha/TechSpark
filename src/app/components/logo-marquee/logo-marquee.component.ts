import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-marquee.component.html',
  styleUrls: ['./logo-marquee.component.css']
})
export class LogoMarqueeComponent {
  logos = [
    'Himal Traders', 'Palua Tech', 'NextWave Labs', 'Click Point Digital',
    'Studio Nine', 'Sagarkot Finance', 'Everest Retail', 'Kalinchowk Media'
  ];
}
