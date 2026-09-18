import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EnrollmentRequest } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private selectedCourseSubject = new BehaviorSubject<string | null>(null);
  selectedCourse$ = this.selectedCourseSubject.asObservable();

  private submissionsSubject = new BehaviorSubject<EnrollmentRequest[]>([]);
  submissions$ = this.submissionsSubject.asObservable();

  selectCourse(courseTitleOrId: string): void {
    this.selectedCourseSubject.next(courseTitleOrId);
  }

  clearSelectedCourse(): void {
    this.selectedCourseSubject.next(null);
  }

  submitEnrollment(request: EnrollmentRequest): Observable<{ success: boolean; applicationId: string }> {
    const applicationId = 'TS-APP-' + Math.floor(100000 + Math.random() * 900000);
    const newRecord: EnrollmentRequest = {
      ...request,
      id: applicationId,
      submittedAt: new Date().toISOString()
    };
    
    const current = this.submissionsSubject.value;
    this.submissionsSubject.next([newRecord, ...current]);

    return new Observable(observer => {
      setTimeout(() => {
        observer.next({ success: true, applicationId });
        observer.complete();
      }, 600);
    });
  }
}
