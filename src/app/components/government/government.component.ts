import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-government',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.css']
})
export class GovernmentComponent {
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
