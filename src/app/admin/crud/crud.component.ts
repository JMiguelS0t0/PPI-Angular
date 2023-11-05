import { Component, OnInit } from '@angular/core';
import { apiService } from '../../services/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  public listacatalogo: any = [];
  public listaservicios: any = [];

  constructor(private apiService: apiService) {}

  ngOnInit(): void {
    this.apiService.getCatalogo().subscribe((catalogo) => {
      console.log(catalogo);
      this.listacatalogo = catalogo;
    });

    this.apiService.getServicios().subscribe((servicios) => {
      console.log(servicios);
      this.listaservicios = servicios;
    });
  }
}
