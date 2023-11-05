import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  BehaviorSubject,
  tap,
  throwError,
  of,
} from 'rxjs';

import { CatalogoModel, ServiciosModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  private catalogoUrl = 'http://localhost:3000/api/catalogo';
  private serviciosUrl = 'http://localhost:3000/api/servicios';

  constructor(private http: HttpClient) {}

  // -------------------------  CATALOGO
  public getCatalogo(): Observable<CatalogoModel> {
    return this.http
      .get<CatalogoModel>(this.catalogoUrl)
      .pipe(catchError(this.handleError));
  }

  public getCatalogoById(id: number): Observable<CatalogoModel> {
    const url = `${this.catalogoUrl}/${id}`;
    return this.http.get<CatalogoModel>(url).pipe(catchError(this.handleError));
  }

  public createCatalogo(C: CatalogoModel): Observable<boolean> {
    return this.http
      .post<boolean>(`${this.catalogoUrl}`, C)
      .pipe(catchError(this.handleError));
  }

  public deleteCatalogo(Id: number): void {
    this.http
      .delete(`${this.catalogoUrl}/${Id}`)
      .pipe(catchError(this.handleError))
      .subscribe();
  }

  //-------------------------SERVICIOS
  public getServicios(): Observable<ServiciosModel> {
    return this.http
      .get<ServiciosModel>(this.serviciosUrl)
      .pipe(catchError(this.handleError));
  }

  public getServicioById(id: number): Observable<ServiciosModel> {
    const url = `${this.serviciosUrl}/${id}`;
    return this.http
      .get<ServiciosModel>(url)
      .pipe(catchError(this.handleError));
  }

  public deleteServicio(Id: number): void {
    this.http
      .delete(`${this.serviciosUrl}/${Id}`)
      .pipe(catchError(this.handleError))
      .subscribe();
  }

  // ------------------------- ERROR
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => new Error(''));
  }
}
