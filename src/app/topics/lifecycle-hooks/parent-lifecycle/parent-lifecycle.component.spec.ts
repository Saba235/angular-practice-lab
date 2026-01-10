import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLifecycleComponent } from './parent-lifecycle.component';

describe('ParentLifecycleComponent', () => {
  let component: ParentLifecycleComponent;
  let fixture: ComponentFixture<ParentLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentLifecycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
