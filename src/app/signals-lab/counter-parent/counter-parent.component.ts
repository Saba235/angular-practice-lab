import { Component, computed, effect, signal } from '@angular/core';
import { CounterChildComponent } from '../counter-child/counter-child.component';

@Component({
  selector: 'app-counter-parent',
  standalone: true,
  imports: [CounterChildComponent],
  templateUrl: './counter-parent.component.html',
  styleUrl: './counter-parent.component.css'
})
export class CounterParentComponent {
  // ✅ Signal state
  count = signal(0);

   // ✅ Computed signal (derived state)
   doubleCount = computed(() => this.count() * 2);
  constructor() {
    // ✅ Effect (side effect)
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

}
