import {Component, OnInit} from '@angular/core';
import {Task} from "../task";
import {TasksService} from "../tasks.service";
import {forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit{
  public tasks: Task[] = [];
  public newTask: Task = {};

  constructor(
    private taskService: TasksService
  ){
  }
  delete(task: Task){
    if (!confirm('Czy na pewno chcesz usunąć?')) {
      return;
    }

      this.taskService.delete(task).subscribe(():void => {
        this.ngOnInit();
      });
    }
  ngOnInit(): void {
    this.taskService.index(true).subscribe((tasks): void => {
      this.tasks = tasks;
    });
  }


}

