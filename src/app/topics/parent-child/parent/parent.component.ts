import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage: string = 'Hello Child!';

  childResponse: string = '';

  receiveMessage(message: string): void {
    this.childResponse = message;
  }

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  resetChild(): void {
    this.childComponent.resetMessage();
  }

}
