import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  public totalElements?: number;
  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.items().subscribe(itemsList => {
      this.totalElements = itemsList.totalElements;
    });
  }
}
