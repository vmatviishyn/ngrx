import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Topping } from '../models/topping.model';

const URL = 'http://localhost:3000';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(`${URL}/toppings`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
