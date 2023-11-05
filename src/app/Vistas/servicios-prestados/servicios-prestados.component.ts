import { Component } from '@angular/core';
import { apiService } from '../../services/api.service';

@Component({
  selector: 'app-servicios-prestados',
  templateUrl: './servicios-prestados.component.html',
  styleUrls: ['./servicios-prestados.component.css'],
})
export class ServiciosPrestadosComponent {
  public listaservicios: any = [];

  constructor(private apiService: apiService) {}

  ngOnInit(): void {
    this.getServicios();
  }

  getServicios() {
    this.apiService.getServicios().subscribe((servicios) => {
      console.log(servicios);
      this.listaservicios = servicios;
    });
  }
}
