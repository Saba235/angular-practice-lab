import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-component-basics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-basics.component.html',
  styleUrl: './component-basics.component.css'
})
export class ComponentBasicsComponent {
title: string = 'Angular Component Basics';
isLoggedIn: boolean = false;
skills: string[] = ['Components', 'Data Binding', 'Directives'];

toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
