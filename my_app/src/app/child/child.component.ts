import { Component, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../input/input.component';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.sass',
})
export class ChildComponent {
  @Output() dataEvent = new EventEmitter<string>();
  sendData() {
    this.dataEvent.emit('-----DATA FROM CHILD------');
  }
}
