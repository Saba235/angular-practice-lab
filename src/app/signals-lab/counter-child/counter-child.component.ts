import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  imports: [],
  templateUrl: './counter-child.component.html',
  styleUrl: './counter-child.component.css'
})
export class CounterChildComponent {
// ✅ Signal passed from parent
  @Input({ required: true }) count!: Signal<number>;
}
