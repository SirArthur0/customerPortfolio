import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-crud',
  templateUrl: './seller-crud.component.html',
  styleUrls: ['./seller-crud.component.css']
})
export class SellerCrudComponent {

  constructor(private router: Router) {

  }

  navToCreateSeller(): void {
    this.router.navigate(['salespeople/create'])
  }

}
