import { Component, Input } from '@angular/core';
import { slideInFromRight } from '../animations/animations';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  animations: [slideInFromRight],
})
export class AlertComponent {
  @Input() title: string;
  @Input() message: string;
  @Input() isError: boolean;
}
