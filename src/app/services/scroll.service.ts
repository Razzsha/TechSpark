import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollTo(sectionId: string): void {
    this.document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
