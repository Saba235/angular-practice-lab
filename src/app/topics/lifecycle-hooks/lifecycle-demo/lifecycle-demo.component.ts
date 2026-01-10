import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  imports: [CommonModule],
  templateUrl: './lifecycle-demo.component.html',
  styleUrl: './lifecycle-demo.component.css'
})
export class LifecycleDemoComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() dataFromParent: string = 'Initial Data';
  constructor() {
    console.log('1️⃣ constructor');
  }
  ngOnChanges() {
    console.log('2️⃣ ngOnChanges');
  }
  ngOnInit() {
    console.log('3️⃣ ngOnInit');
  }
  ngDoCheck() {
    console.log('4️⃣ ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('5️⃣ ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('6️⃣ ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('7️⃣ ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('8️⃣ ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('9️⃣ ngOnDestroy');
  }
}
