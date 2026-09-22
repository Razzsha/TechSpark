import { Injectable, inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private router = inject(Router);

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  private isFadingOutSubject = new BehaviorSubject<boolean>(false);

  isLoading$ = this.isLoadingSubject.asObservable();
  isFadingOut$ = this.isFadingOutSubject.asObservable();

  private hideTimeout: any = null;

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.hide();
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      }
    });
  }

  show(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    this.isFadingOutSubject.next(false);
    this.isLoadingSubject.next(true);
  }

  hide(): void {
    this.hideTimeout = setTimeout(() => {
      this.isFadingOutSubject.next(true);
      setTimeout(() => {
        this.isLoadingSubject.next(false);
        this.isFadingOutSubject.next(false);
      }, 250);
    }, 250);
  }
}
