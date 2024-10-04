import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Restaurant } from '../types/restaurant.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReferentielService {
  private apiUrl = `${environment.apiUrl}/referentiel`;

  constructor(private http: HttpClient) {}

  public getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiUrl}/restaurants`);
  }

  public addMultipleRestaurants(
    restaurants: Restaurant[]
  ): Observable<Restaurant> {
    return this.http.post<Restaurant>(
      `${this.apiUrl}/restaurants/bulk`,
      restaurants
    );
  }
}
