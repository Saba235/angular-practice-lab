import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic1-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic1-child.component.html',
  styleUrls: ['./topic1-child.component.css']
})
export class Topic1ChildComponent {
  @Input() user!: string;
  @Output() userSelected = new EventEmitter<string>();

  selectUser() {
    this.userSelected.emit(this.user);
  }
}
