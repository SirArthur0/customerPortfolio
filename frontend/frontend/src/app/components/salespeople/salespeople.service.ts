import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesPeople } from './salesPeople.model';
import { MatSnackBar }from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SalespeopleService {

  baseUrl = "http://localhost:3002/salespeople"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(salesPeople: SalesPeople): Observable<SalesPeople> {
    return this.http.post<SalesPeople>(this.baseUrl, salesPeople)
  }

  read(): Observable<SalesPeople[]> {
    return this.http.get<SalesPeople[]>(this.baseUrl)
  }


}
