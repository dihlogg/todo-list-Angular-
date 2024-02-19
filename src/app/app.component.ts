import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  list: any[] = [];
  task: string = '';
  date: string = '';
  taskCount: number;

  constructor() {
    this.list = JSON.parse(localStorage.getItem('tasks') || '[]');
  }
  ngOnInit() {
    this.list = JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  addTask(task: string, date: string) {
    if (!task || !date) {
      alert('Please enter task and date.');
    } else {
      const newId = this.generateUniqueId();
      this.list.push({ id: newId, name: task, date: date });
      localStorage.setItem('tasks', JSON.stringify(this.list));
      console.warn(this.list);
      this.task = "";
      this.date = "";
    }
  }

  removeTask(id: number) {
    console.warn(id);
    this.list = this.list.filter(item => item.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }
  generateUniqueId(): number {
    return new Date().getTime();
  }
}
