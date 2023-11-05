import { Component, OnInit } from '@angular/core';
import { apiService } from '../../services/api.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  public listacatalogo: any = [];

  constructor(private apiService: apiService) {}

  ngOnInit(): void {
    this.getCatalogo();
  }

  getCatalogo() {
    this.apiService.getCatalogo().subscribe((catalogo) => {
      console.log(catalogo);
      this.listacatalogo = catalogo;
    });
  }
}
