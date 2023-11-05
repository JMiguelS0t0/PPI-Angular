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

  public createCatalogo(C: CatalogoModel): Observable<boolean> {
    return this.http
      .post<boolean>(this.catalogoUrl, C)
      .pipe(catchError(this.handleError));
  }

  //-------------------------SERVICIOS
  public getServicios(): Observable<ServiciosModel> {
    return this.http
      .get<ServiciosModel>(this.serviciosUrl)
      .pipe(catchError(this.handleError));
  }

  // ------------------------- ERROR
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => new Error(''));
  }
}
