import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Topic1ChildComponent } from './topic1-child.component';

describe('Topic1ChildComponent', () => {
  let component: Topic1ChildComponent;
  let fixture: ComponentFixture<Topic1ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topic1ChildComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(Topic1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should accept user input', () => {
    component.user = 'Saba';
    expect(component.user).toBe('Saba');
  });

  it('should emit selected user when selectUser() is called', () => {
    const emittedValue = 'Saba';
    component.user = emittedValue;

    spyOn(component.userSelected, 'emit');

    component.selectUser();

    expect(component.userSelected.emit).toHaveBeenCalledWith(emittedValue);
  });
});
