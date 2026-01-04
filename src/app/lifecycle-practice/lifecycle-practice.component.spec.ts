import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclePracticeComponent } from './lifecycle-practice.component';

describe('LifecyclePracticeComponent', () => {
  let component: LifecyclePracticeComponent;
  let fixture: ComponentFixture<LifecyclePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyclePracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyclePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
