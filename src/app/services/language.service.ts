import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type LanguageCode = 'en' | 'np';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private langSubject = new BehaviorSubject<LanguageCode>('en');
  currentLang$ = this.langSubject.asObservable();

  private translations: Record<LanguageCode, Record<string, string>> = {
    en: {
      'nav.home': 'Home',
      'nav.courses': 'All Courses',
      'nav.services': 'IT Services',
      'nav.about': 'About Us',
      'nav.contact': 'Contact',
      'nav.enroll': 'Enroll Now',
      'nav.verify': 'Verify Certificate',
      'nav.quiz': 'Career Quiz',
      'nav.corporate': 'Corporate Training',
      'nav.placements': 'Placements & Hiring',
      'hero.kicker': 'LEADING IT ACADEMY & SOFTWARE HOUSE',
      'hero.title': 'Transform Your Career with Industry IT Skills',
      'hero.cta': 'Explore All Courses'
    },
    np: {
      'nav.home': 'गृहपृष्ठ (Home)',
      'nav.courses': 'सबै कोर्सहरू',
      'nav.services': 'आइटी सेवाहरू',
      'nav.about': 'हाम्रो बारेमा',
      'nav.contact': 'सम्पर्क',
      'nav.enroll': 'भर्ना हुनुहोस्',
      'nav.verify': 'प्रमाणपत्र प्रमाणिकरण',
      'nav.quiz': 'करियर क्विज',
      'nav.corporate': 'कर्पोरेट तालिम',
      'nav.placements': 'रोजगार र प्लेसमेन्ट',
      'hero.kicker': 'नेपालको उत्कृष्ट आइटी एकेडेमी',
      'hero.title': 'आइटी सीप सिकेर आफ्नो उज्ज्वल भविष्य बनाउनुहोस्',
      'hero.cta': 'कोर्सहरू हेर्नुहोस्'
    }
  };

  constructor() {
    const saved = localStorage.getItem('techspark_lang') as LanguageCode;
    if (saved === 'en' || saved === 'np') {
      this.setLanguage(saved);
    }
  }

  setLanguage(lang: LanguageCode): void {
    this.langSubject.next(lang);
    localStorage.setItem('techspark_lang', lang);
  }

  toggleLanguage(): void {
    const next = this.langSubject.value === 'en' ? 'np' : 'en';
    this.setLanguage(next);
  }

  translate(key: string): string {
    const current = this.langSubject.value;
    return this.translations[current]?.[key] || this.translations['en']?.[key] || key;
  }

  get currentLang(): LanguageCode {
    return this.langSubject.value;
  }
}
