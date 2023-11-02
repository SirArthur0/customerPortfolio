import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalespeopleService } from '../salespeople.service';
import { SalesPeople } from '../salesPeople.model';

@Component({
  selector: 'app-salespeople-create',
  templateUrl: './salespeople-create.component.html',
  styleUrls: ['./salespeople-create.component.css']
})
export class SalespeopleCreateComponent implements OnInit {

  salesPeople: SalesPeople = {
    name: "",
    email: "",
    isActive: true
  }

  constructor(private salesPeopleService: SalespeopleService, private router: Router) { }

  ngOnInit(): void {

  }

  createSeller(): void {
    this.salesPeopleService.create(this.salesPeople).subscribe(() => {
    this.salesPeopleService.showMessage("Seller added")
    this.router.navigate(['/salespeople'])
    })
  }

  cancel(): void {
    this.router.navigate(["/salespeople"])
  }

}
