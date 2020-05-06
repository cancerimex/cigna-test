import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ProviderResults, Provider } from '../models/providers';

/**
 * Providers Service
 */
@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  /**
   * Base URL
   */
  public readonly BASE_URL = `${environment.apiUrl}`;

  /**
   * Creates an instance of ProvidersService.
   *
   * @param http HttpClient
   */
  constructor(
    private http: HttpClient
  ) {}

  /**
   * Gets a list of Providers
   */
  getProviders(): Observable<ProviderResults> {
    return this.http.get<ProviderResults>(`${this.BASE_URL}assets/data.json`)
      .pipe(
        catchError(this.handleError<ProviderResults>('getProviders'))
      );
  }

  /**
   * Get a provider
   *
   * @param id string
   */
  getProvider(id: string): Observable<ProviderResults> {
    return this.http.get<ProviderResults>(`${this.BASE_URL}api/v1/providers/${id}`)
      .pipe(
        catchError(this.handleError<ProviderResults>('getProvider'))
      );
  }

  /**
   * Create a provider
   *
   * @param provider Provider
   */
  addProvider(provider: Provider): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}api/v1/providers`, provider)
      .pipe(
        catchError(this.handleError<any>('addProvider'))
      );
  }

  /**
   * Update a provider
   *
   * @param id string
   * @param provider Provider
   */
  updateProvider(id: string, provider: Provider): Observable<any> {
    return this.http.patch<any>(`${this.BASE_URL}api/v1/providers/${id}`, provider)
      .pipe(
        catchError(this.handleError<any>('updateProvider'))
      );
  }

  /**
   * Delete a provider
   *
   * @param id string
   */
  deleteProvider(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}api/v1/providers/${id}`)
      .pipe(
        catchError(this.handleError<any>('deleteProvider'))
      );
  }

  /**
   * Generic error handler
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
