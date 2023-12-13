import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AddPersonComponent} from "./add-person/add-person.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {path: "list", component:ListComponent},
  {path: "details/:id", component:DetailsComponent},
  {path: "add", component:AddPersonComponent},
  {path: "", component:ListComponent},
  {path: "**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
