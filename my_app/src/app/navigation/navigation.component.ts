import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass',
})
export class NavigationComponent {}
