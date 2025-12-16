import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic3ObservableBasicComponent } from './topic3-observable-basic.component';

describe('Topic3ObservableBasicComponent', () => {
  let component: Topic3ObservableBasicComponent;
  let fixture: ComponentFixture<Topic3ObservableBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topic3ObservableBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topic3ObservableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
