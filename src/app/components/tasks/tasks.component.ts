import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'
import { TaskService } from '../../service/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task) => this.tasks = task);

  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id! !== task.id));
  }
  toggleRemainter(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTaskremainder(task).subscribe()
  }
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}
