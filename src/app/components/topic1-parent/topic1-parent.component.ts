import { Component } from '@angular/core';
import { Topic1ChildComponent } from "../topic1-child/topic1-child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic1-parent',
  standalone: true,
  imports: [Topic1ChildComponent, CommonModule],
  templateUrl: './topic1-parent.component.html',
  styleUrl: './topic1-parent.component.css'
})
export class Topic1ParentComponent {
users = ["Saba"];
selectedUser = '';

}
