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

  addTask(task: string, date: string) {
    if (!task || !date) {
      alert('Please enter task and date.');
    } else {
      this.list.push({ id: this.list.length, name: task, date: date });
      console.warn(this.list);
      this.task = "";
      this.date = "";
    }
  }

  removeTask(id: number) {
    console.warn(id);
    this.list = this.list.filter(item => item.id !== id);
  }
}
