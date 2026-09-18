import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface VerifiedCertificate {
  id: string;
  studentName: string;
  courseTitle: string;
  completionDate: string;
  grade: string;
  issueNo: string;
  verifier: string;
}

@Component({
  selector: 'app-verify-certificate',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './verify-certificate.component.html',
  styleUrls: ['./verify-certificate.component.css']
})
export class VerifyCertificateComponent implements OnInit {
  certIdInput = '';
  searchAttempted = false;
  verifiedData?: VerifiedCertificate;

  private sampleCertificates: Record<string, VerifiedCertificate> = {
    'TS-CERT-88492': {
      id: 'TS-CERT-88492',
      studentName: 'Aashish Shrestha',
      courseTitle: 'MERN Stack Development Masterclass',
      completionDate: 'August 14, 2025',
      grade: 'Distinction (94%)',
      issueNo: 'ISO-9001-NEP-88492',
      verifier: 'Techspark Academic Board & ISO Assessor'
    },
    'TS-CERT-10294': {
      id: 'TS-CERT-10294',
      studentName: 'Pooja Karki',
      courseTitle: 'Python & AI: Machine Learning & GenAI',
      completionDate: 'July 28, 2025',
      grade: 'Grade A+ (91%)',
      issueNo: 'ISO-9001-NEP-10294',
      verifier: 'Techspark AI Research Lab'
    },
    'TS-CERT-55201': {
      id: 'TS-CERT-55201',
      studentName: 'Rohan Gurung',
      courseTitle: 'UI/UX Design Masterclass with Figma',
      completionDate: 'September 02, 2025',
      grade: 'Distinction (96%)',
      issueNo: 'ISO-9001-NEP-55201',
      verifier: 'Techspark Product Design Board'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.certIdInput = id;
        this.searchCertificate();
      }
    });
  }

  searchCertificate(): void {
    const cleanId = this.certIdInput.trim().toUpperCase();
    if (!cleanId) return;

    this.searchAttempted = true;
    this.verifiedData = this.sampleCertificates[cleanId];

    // If ID isn't in static dictionary, generate a dynamic mock verified result for testing any ID format e.g. TS-CERT-XXXX
    if (!this.verifiedData && cleanId.startsWith('TS-')) {
      this.verifiedData = {
        id: cleanId,
        studentName: 'Verified Student',
        courseTitle: 'Professional IT Certification',
        completionDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        grade: 'Distinction (92%)',
        issueNo: `ISO-9001-NEP-${cleanId.replace(/[^0-9]/g, '') || '99999'}`,
        verifier: 'Techspark Academic Council'
      };
    }
  }

  printCertificate(): void {
    window.print();
  }
}
