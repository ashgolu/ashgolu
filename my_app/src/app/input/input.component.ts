import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.sass',
})
export class InputComponent {
  @Input() name = 'santhosh';
  @Input() occupation = 'software engineer';
}
