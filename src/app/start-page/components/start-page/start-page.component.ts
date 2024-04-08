import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  standalone: true,
  imports: [TranslateModule, NavigationComponent],
  selector: 'rd-start-page',
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss',
})
export class StartPageComponent {
  @Output() getStartedClicked: EventEmitter<void> = new EventEmitter();
  
  constructor() {}
}
