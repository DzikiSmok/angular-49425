import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  personId?: number;
  person?: Person;

constructor( private route : ActivatedRoute, private personService: PersonLsService) {
}
 ngOnInit(): void {
   this.route.params.subscribe(params => {
     this.personId = params['id'];
     this.person = this.personId ? this.personService.getPerson(this.personId) : undefined;
   })
 }
}
