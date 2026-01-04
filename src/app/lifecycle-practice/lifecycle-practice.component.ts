import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-practice',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-practice.component.html',
  styleUrl: './lifecycle-practice.component.css'
})
export class LifecyclePracticeComponent implements OnInit, DoCheck,   AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,  OnDestroy {
  count = 0;
  constructor() {
    console.log('1️⃣ constructor');
  }
  ngOnInit() {
    console.log('2️⃣ ngOnInit');
  }
  ngDoCheck() {
    console.log('3️⃣ ngDoCheck');
  }

  change() {
    this.count++;
  }
  ngAfterContentInit() {
    console.log('4️⃣ ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('5️⃣ ngAfterContentChecked');
  }

  dummy() { }
  ngAfterViewInit() {
    console.log('6️⃣ ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('7️⃣ ngAfterViewChecked');
  }

  trigger() {}
  ngOnDestroy() {
    console.log('8️⃣ ngOnDestroy');
  }
}
