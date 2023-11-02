import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellerCrudComponent } from './views/seller-crud/seller-crud.component'
import { HomeComponent } from './views/home/home.component';
import { SalespeopleCreateComponent } from './components/salespeople/salespeople-create/salespeople-create.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "salespeople",
  component: SellerCrudComponent
}, {
  path: "salespeople/create",
  component: SalespeopleCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
