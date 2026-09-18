import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [],
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  hidden = false;

  ngOnInit(): void {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      this.hidden = true;
      return;
    }
    setTimeout(() => this.hide(), 1500);
    window.addEventListener('click', () => this.hide(), { once: true });
  }

  hide(): void {
    this.hidden = true;
  }
}
