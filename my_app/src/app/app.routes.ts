import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ServerComponent } from './server/server.component';
import { InputComponent } from './input/input.component';

export const routes: Routes = [
  {
    path: 'parent',
    title: 'App parent page',
    component: ParentComponent,
  },
  {
    path: 'child',
    title: 'App child page',
    component: ChildComponent,
  },
  {
    path: 'server',
    title: 'App server page',
    component: ServerComponent,
  },
  {
    path: 'input',
    title: 'App input page',
    component: InputComponent,
  },
];
