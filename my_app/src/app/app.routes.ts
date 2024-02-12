import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ServerComponent } from './server/server.component';

export const routes: Routes = [
    {
        path:"parent",
        title:"App parent page",
        component:ParentComponent,
    },
    {
        path:"child",
        title:"App child page",
        component:ChildComponent,
    },
    {
        path:"server",
        title:"App server page",
        component:ServerComponent,
    }
];
