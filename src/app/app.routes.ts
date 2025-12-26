import { Routes } from '@angular/router';
import { Topic1BasicsComponent } from './components/topic1-basics/topic1-basics.component';
import { Topic1ParentComponent } from './components/topic1-parent/topic1-parent.component';
import { Topic3ObservableBasicComponent } from './components/topic3-observable-basic/topic3-observable-basic.component';
import { CounterParentComponent } from './signals-lab/counter-parent/counter-parent.component';
export const routes: Routes = [
  {
    path: 'topic1-Component',
    component: Topic1BasicsComponent
  },
  {
    path: 'parent-child-communication',
    component: Topic1ParentComponent
  },
  { path: 'observable-basic', component: Topic3ObservableBasicComponent },
   { path: 'signals', component: CounterParentComponent },
];
