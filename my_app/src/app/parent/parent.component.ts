import { Component } from '@angular/core';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.sass',
})
export class ParentComponent {
  getdata(value: string) {
    console.log(value);
  }
}
