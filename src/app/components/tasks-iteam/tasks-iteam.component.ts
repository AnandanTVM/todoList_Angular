import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-iteam',
  templateUrl: './tasks-iteam.component.html',
  styleUrls: ['./tasks-iteam.component.css']
})
export class TasksIteamComponent {
  @Input() task!: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;

  OnDelete(task: Task) {
    this.onDeleteTask.emit(task)

  }
}
