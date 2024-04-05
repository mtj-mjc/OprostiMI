import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'rd-confession-stepper',
  templateUrl: './confession-stepper.component.html',
  styleUrl: './confession-stepper.component.scss',
})
export class ConfessionStepperComponent {
  @Input() confession: any;

  constructor() {}
}
