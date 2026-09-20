import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Course } from '../models/course.model';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private doc = inject(DOCUMENT);

  private readonly siteName = 'Techspark Academy & Technology';
  private readonly baseUrl = 'https://techspark.edu.np';
  private readonly defaultImage = 'https://techspark.edu.np/assets/techspark-og-banner.jpg';

  /**
   * Set dynamic page titles, standard meta tags, OpenGraph, and Twitter cards
   */
  setSeoData(config: SeoConfig): void {
    const fullTitle = config.title.includes('Techspark') ? config.title : `${config.title} | ${this.siteName}`;
    this.titleService.setTitle(fullTitle);

    // Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    if (config.keywords && config.keywords.length > 0) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords.join(', ') });
    } else {
      this.metaService.updateTag({
        name: 'keywords',
        content: 'IT training Kathmandu, best software courses Nepal, MERN stack course, Python AI training, DevOps AWS Kathmandu, UI/UX Figma course, Techspark Academy'
      });
    }

    this.metaService.updateTag({ name: 'author', content: 'Techspark Technology Pvt. Ltd.' });
    this.metaService.updateTag({
      name: 'robots',
      content: config.noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    });

    // Canonical URL
    const canonical = config.canonicalUrl || (this.doc.location ? this.doc.location.pathname : '/');
    this.setCanonicalUrl(canonical.startsWith('http') ? canonical : `${this.baseUrl}${canonical}`);

    // OpenGraph Meta Tags
    this.metaService.updateTag({ property: 'og:site_name', content: this.siteName });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:type', content: config.ogType || 'website' });
    this.metaService.updateTag({ property: 'og:url', content: canonical.startsWith('http') ? canonical : `${this.baseUrl}${canonical}` });
    this.metaService.updateTag({ property: 'og:image', content: config.ogImage || this.defaultImage });
    this.metaService.updateTag({ property: 'og:locale', content: 'en_US' });

    // Twitter Cards
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: config.ogImage || this.defaultImage });
  }

  /**
   * Set or update canonical link element in document head
   */
  setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /**
   * Injects or updates JSON-LD Schema markup in document head
   */
  setStructuredData(schema: object | object[], scriptId = 'techspark-schema-jsonld'): void {
    let script: HTMLScriptElement | null = this.doc.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = this.doc.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }
    script.text = JSON.stringify(schema, null, 2);
  }

  /**
   * Removes injected structured data script
   */
  removeStructuredData(scriptId = 'techspark-schema-jsonld'): void {
    const script = this.doc.getElementById(scriptId);
    if (script) {
      script.remove();
    }
  }

  /**
   * Generates EducationalOrganization & LocalBusiness JSON-LD Schema
   */
  getOrganizationAndLocalSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'EducationalOrganization',
          '@id': `${this.baseUrl}/#organization`,
          'name': 'Techspark Academy',
          'alternateName': 'Techspark Technology Pvt. Ltd.',
          'url': this.baseUrl,
          'logo': `${this.baseUrl}/assets/logo.png`,
          'sameAs': [
            'https://facebook.com/techsparknepal',
            'https://linkedin.com/company/techspark-nepal',
            'https://instagram.com/techspark.np',
            'https://github.com/techspark'
          ],
          'description': 'Leading IT Academy & Software Development House in Kathmandu, Nepal providing job-oriented tech bootcamps, corporate upskilling, and full-stack software solutions.',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Putalisadak / New Baneshwor',
            'addressLocality': 'Kathmandu',
            'addressRegion': 'Bagmati Province',
            'postalCode': '44600',
            'addressCountry': 'NP'
          },
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+977-9800000000',
            'contactType': 'admissions and customer service',
            'areaServed': 'NP',
            'availableLanguage': ['English', 'Nepali']
          }
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${this.baseUrl}/#localbusiness`,
          'name': 'Techspark Technology & Skill Academy',
          'image': `${this.baseUrl}/assets/office.jpg`,
          'telephone': '+977-9800000000',
          'priceRange': 'NPR 18,000 - NPR 32,000',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Putalisadak Tech Hub',
            'addressLocality': 'Kathmandu',
            'addressRegion': 'Bagmati',
            'postalCode': '44600',
            'addressCountry': 'NP'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 27.700769,
            'longitude': 85.320496
          },
          'openingHoursSpecification': [
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              'opens': '06:30',
              'closes': '19:30'
            }
          ]
        }
      ]
    };
  }

  /**
   * Generates Course JSON-LD Schema for rich snippet course badges on Google
   */
  getCourseSchema(course: Course): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': course.title,
      'description': course.fullDescription || course.shortDescription,
      'provider': {
        '@type': 'EducationalOrganization',
        'name': 'Techspark Academy',
        'sameAs': this.baseUrl
      },
      'educationalCredentialAwarded': 'Official Techspark Industry Certificate of Completion',
      'courseCode': course.id.toUpperCase(),
      'timeRequired': course.duration,
      'hasCourseInstance': {
        '@type': 'CourseInstance',
        'courseMode': course.mode.toLowerCase().includes('online') ? 'Blended' : 'Onsite',
        'courseWorkload': course.duration,
        'instructor': {
          '@type': 'Person',
          'name': 'Senior Lead Software Architect at Techspark'
        }
      },
      'offers': {
        '@type': 'Offer',
        'category': 'Paid',
        'price': course.price,
        'priceCurrency': 'NPR',
        'availability': 'https://schema.org/InStock',
        'validFrom': new Date().toISOString().split('T')[0],
        'url': `${this.baseUrl}/enroll?course=${course.id}`
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': course.rating || 4.9,
        'ratingCount': course.ratingCount || 120,
        'bestRating': 5,
        'worstRating': 1
      },
      'syllabusSections': course.syllabus.map((mod, idx) => ({
        '@type': 'Syllabus',
        'name': mod.title,
        'position': idx + 1,
        'description': mod.topics.join(', ')
      }))
    };
  }

  /**
   * Generates FAQPage JSON-LD Schema for Google rich accordion results
   */
  getFaqSchema(faqs: { question: string; answer: string }[]): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };
  }

  /**
   * Generates BreadcrumbList Schema for Google Search breadcrumb navigation
   */
  getBreadcrumbsSchema(items: { name: string; path: string }[]): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': `${this.baseUrl}${item.path}`
      }))
    };
  }
}
