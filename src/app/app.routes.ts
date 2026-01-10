import { Routes } from '@angular/router';
import { ComponentBasicsComponent } from './topics/component-basics/component-basics.component';
import { ParentComponent } from './topics/parent-child/parent/parent.component';
export const routes: Routes = [
  {
    path: 'component-basics',
    component: ComponentBasicsComponent
  },
  {
    path: 'parent-child',
    component: ParentComponent
  }
];
