import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-lifecycle',
  imports: [],
  templateUrl: './child-lifecycle.component.html',
  styleUrl: './child-lifecycle.component.css'
})
export class ChildLifecycleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() userData!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('🔄 ngOnChanges', changes['userData']);
  }

  ngOnInit(): void {
    console.log('✅ ngOnInit – Child initialized');
  }

  ngOnDestroy(): void {
    console.log('❌ ngOnDestroy – Child destroyed');
  }
}
