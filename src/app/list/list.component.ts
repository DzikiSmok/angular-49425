import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  list: string[] = [];
  inputText: string = "";

  ngOnInit(): void{

  }

  inputToArray(): void{
    if(this.inputText){
      this.list.push(this.inputText);
      this.inputText="";
    }
  }

  remove(index: number): void{
    this.list.splice(index,1);
  }
}
