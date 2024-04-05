import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ConfessionsService } from '../../services/confessions.service';
import { ConfessionStepperComponent } from '../confession-stepper/confession-stepper.component';

@Component({
  standalone: true,
  imports: [TranslateModule, ConfessionStepperComponent],
  providers: [ConfessionsService],
  selector: 'rd-confessions',
  templateUrl: './confessions.component.html',
  styleUrl: './confessions.component.scss',
})
export class ConfessionsComponent {
  confessions: any[] = [];
  constructor(public confessionService: ConfessionsService) {
    this.getConfessions();
  }

  async getConfessions() {
    this.confessions = await this.confessionService.loadConfessions();
  }
}
