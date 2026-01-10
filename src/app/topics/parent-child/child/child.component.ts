import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() messageFromParent: string = '';
  @Output() notifyParent = new EventEmitter<string>();

  sendMessage(): void {
    this.notifyParent.emit('Hello Parent! This is from Child.');
  }

  resetMessage(): void {
  this.notifyParent.emit('Child state reset by Parent');
}

}
