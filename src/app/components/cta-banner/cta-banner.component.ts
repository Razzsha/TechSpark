import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [],
  templateUrl: './cta-banner.component.html',
  styleUrls: ['./cta-banner.component.css']
})
export class CtaBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scrollTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }
}
