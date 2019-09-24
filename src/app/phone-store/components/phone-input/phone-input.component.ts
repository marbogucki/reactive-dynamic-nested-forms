import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent {
  @Input() groupFromParent?: any;
  @Input() field;
}
