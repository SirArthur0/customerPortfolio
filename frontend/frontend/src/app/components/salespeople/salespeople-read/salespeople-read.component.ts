import { Component, OnInit, ViewChild } from '@angular/core';
import { SalesPeople } from '../salesPeople.model';
import { SalespeopleService } from '../salespeople.service';

@Component({
  selector: 'app-salespeople-read',
  templateUrl: './salespeople-read.component.html',
  styleUrls: ['./salespeople-read.component.css']
})
export class SalespeopleReadComponent implements OnInit {

  salesPeople: SalesPeople[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'isActive'];
  constructor(private salespeopleService: SalespeopleService) { }

  ngOnInit(): void {
 
  }
  
  ngAfterViewInit(): void {
    this.salespeopleService.read().subscribe(salesPeople => {
      this.salesPeople = salesPeople
      console.log(salesPeople)
    })
  }


}
