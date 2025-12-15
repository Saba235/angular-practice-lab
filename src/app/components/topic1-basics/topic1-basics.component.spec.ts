import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Topic1BasicsComponent } from './topic1-basics.component';
import { FormsModule } from '@angular/forms';

describe('Topic1BasicsComponent', () => {
  let component: Topic1BasicsComponent;
  let fixture: ComponentFixture<Topic1BasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topic1BasicsComponent, FormsModule] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(Topic1BasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial name as Saba', () => {
    expect(component.name).toBe('Saba');
  });

  it('should change name when changeName() is called', () => {
    component.changeName();
    expect(component.name).toBe('Angular Champ');
  });
});
