import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.sass',
})
export class ParentComponent {
  dataFromChild = '';
  dataReceived(data: string) {
    this.dataFromChild = data;
  }
}
