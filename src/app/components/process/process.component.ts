import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProcessPanel = 'dev' | 'academy';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
  activePanel: ProcessPanel = 'dev';

  setPanel(panel: ProcessPanel): void {
    this.activePanel = panel;
  }
}
