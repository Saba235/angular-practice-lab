import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildLifecycleComponent } from '../child-lifecycle/child-lifecycle.component';

@Component({
  selector: 'app-parent-lifecycle',
  imports: [CommonModule, ChildLifecycleComponent],
  templateUrl: './parent-lifecycle.component.html',
  styleUrl: './parent-lifecycle.component.css'
})
export class ParentLifecycleComponent {
  showChild: boolean = true;

  parentData: string = 'Initial User Data';

  updateData(): void {
    this.parentData = 'Updated at ' + new Date().toLocaleTimeString();
  }

  toggleChild(): void {
    this.showChild = !this.showChild;
  }
}
