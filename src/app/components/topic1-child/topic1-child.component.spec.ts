import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic1ChildComponent } from './topic1-child.component';

describe('Topic1ChildComponent', () => {
  let component: Topic1ChildComponent;
  let fixture: ComponentFixture<Topic1ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topic1ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topic1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
