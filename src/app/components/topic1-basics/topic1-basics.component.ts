// Practicing Angular basics – interpolation, ngFor, component communication

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topic1-basics',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './topic1-basics.component.html',
  styleUrl: './topic1-basics.component.css'
})
export class Topic1BasicsComponent {
name = 'Saba';
username = '';

changeName() {
  this.name = 'Angular Champ';
}

}