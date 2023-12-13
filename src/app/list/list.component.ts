import { Component } from '@angular/core';
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  people: Person[] = [];
  constructor( private personService: PersonLsService) {
  }
  ngOnInit(){
    this.people = this.personService.getAll();
}

  delete(index: number): void{
    if(confirm("Czy na pewno chcesz usunąć kontakt?")){
      this.personService.deletePerson(index);
      this.people = this.personService.getAll();
    }
  }

}
