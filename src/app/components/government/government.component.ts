import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-government',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.css']
})
export class GovernmentComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setSeoData({
      title: 'GovTech & Public Sector Tech Training | Techspark Nepal',
      description: 'Capacity building, cybersecurity compliance, and Digital Nepal initiative training for government bodies, public utilities, and civil services.',
      keywords: ['GovTech training Nepal', 'Digital Nepal initiative tech', 'public sector IT capacity building Kathmandu'],
      canonicalUrl: 'https://techspark.edu.np/government'
    });

    const breadcrumbs = this.seoService.getBreadcrumbsSchema([
      { name: 'Home', path: '/' },
      { name: 'We Work For', path: '/' },
      { name: 'Government', path: '/government' }
    ]);
    this.seoService.setStructuredData(breadcrumbs);
  }
  govInitiatives = [
    {
      title: 'Digital Nepal & Public Sector Capacity Building',
      icon: 'fa-landmark-flag',
      desc: 'Specialized digital literacy, e-governance solutions, and digital workflow training designed for government departments, municipalities, and public enterprises.'
    },
    {
      title: 'Cybersecurity & Infrastructure Hardening',
      icon: 'fa-shield-halved',
      desc: 'Critical IT infrastructure protection, data sovereignty compliance, vulnerability audits, and ethical hacking protocols for civic digital systems.'
    },
    {
      title: 'Youth Digital Skills & Employment Programs',
      icon: 'fa-users-gear',
      desc: 'Collaborative nationwide bootcamps aimed at transforming underrepresented and provincial youth into employable software engineers and IT specialists.'
    },
    {
      title: 'Custom GovTech Software Development',
      icon: 'fa-server',
      desc: 'Secure citizen-facing portals, municipal management dashboards, electronic records archival systems, and automated grievance reporting tools.'
    }
  ];

  stats = [
    { value: '10+', label: 'Public Sector Programs Delivered' },
    { value: '1,200+', label: 'Civil Servants & Tech Officers Trained' },
    { value: '100%', label: 'Data Security & ISO Aligned' },
    { value: '7', label: 'Provinces Supported with Digital Outreach' }
  ];
}
