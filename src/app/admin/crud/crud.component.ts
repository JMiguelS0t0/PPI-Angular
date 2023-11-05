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
    this.getCatalogo();

    this.getServicios();
  }

  //--------------------CATALOGO
  getCatalogo() {
    this.apiService.getCatalogo().subscribe((catalogo) => {
      console.log(catalogo);
      this.listacatalogo = catalogo;
    });
  }

  deleteCatalogo(Id: number) {
    this.apiService.deleteCatalogo(Id);
    this.getCatalogo();
  }

  //--------------------SERVICIOS
  getServicios() {
    this.apiService.getServicios().subscribe((servicios) => {
      console.log(servicios);
      this.listaservicios = servicios;
    });
  }

  deleteServicio(Id: number) {
    this.apiService.deleteServicio(Id);
    this.getServicios();
  }
}
