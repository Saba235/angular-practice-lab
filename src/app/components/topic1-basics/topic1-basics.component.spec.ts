import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic1BasicsComponent } from './topic1-basics.component';

describe('Topic1BasicsComponent', () => {
  let component: Topic1BasicsComponent;
  let fixture: ComponentFixture<Topic1BasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topic1BasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topic1BasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
