import { Routes } from '@angular/router';
import { ComponentBasicsComponent } from './topics/component-basics/component-basics.component';
import { ParentComponent } from './topics/parent-child/parent/parent.component';
import { LifecycleDemoComponent } from './topics/lifecycle-hooks/lifecycle-demo/lifecycle-demo.component';
import { ParentLifecycleComponent } from './topics/lifecycle-hooks/parent-lifecycle/parent-lifecycle.component';
export const routes: Routes = [
  {
    path: 'component-basics',
    component: ComponentBasicsComponent
  },
  {
    path: 'parent-child',
    component: ParentComponent
  },
  {
    path: 'lifecycle-hooks',
    component: LifecycleDemoComponent
  },
  {
    path: 'lifecycle-parent-child',
    component: ParentLifecycleComponent
  }
];
