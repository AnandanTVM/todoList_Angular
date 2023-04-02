import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksIteamComponent } from './tasks-iteam.component';

describe('TasksIteamComponent', () => {
  let component: TasksIteamComponent;
  let fixture: ComponentFixture<TasksIteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksIteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksIteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
