import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-academy-band',
  standalone: true,
  imports: [],
  templateUrl: './academy-band.component.html',
  styleUrls: ['./academy-band.component.css']
})
export class AcademyBandComponent {
  constructor(private scrollService: ScrollService) {}

  scrollTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }
}
