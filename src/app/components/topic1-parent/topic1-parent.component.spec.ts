import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Topic1ParentComponent } from './topic1-parent.component';
import { Topic1ChildComponent } from '../topic1-child/topic1-child.component';

describe('Topic1ParentComponent', () => {
  let component: Topic1ParentComponent;
  let fixture: ComponentFixture<Topic1ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topic1ParentComponent, Topic1ChildComponent] // standalone components
    }).compileComponents();

    fixture = TestBed.createComponent(Topic1ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the parent component', () => {
    expect(component).toBeTruthy();
  });

  it('should have users list', () => {
    expect(component.users).toEqual(['Saba']);
  });

  it('should update selectedUser when child emits value', () => {
    const childFixture = TestBed.createComponent(Topic1ChildComponent);
    const childComponent = childFixture.componentInstance;

    // simulate child output
    childComponent.user = 'Saba';
    childComponent.userSelected.emit('Saba');

    component.selectedUser = 'Saba';

    expect(component.selectedUser).toBe('Saba');
  });
});
