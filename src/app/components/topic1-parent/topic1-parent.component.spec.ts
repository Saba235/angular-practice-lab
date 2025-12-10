import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic1ParentComponent } from './topic1-parent.component';

describe('Topic1ParentComponent', () => {
  let component: Topic1ParentComponent;
  let fixture: ComponentFixture<Topic1ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topic1ParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topic1ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
