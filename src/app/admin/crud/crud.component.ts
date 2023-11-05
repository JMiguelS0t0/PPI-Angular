import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { apiService } from '../../services/api.service';
import { CatalogoModel } from 'src/app/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  public listacatalogo: any = [];
  public listaservicios: any = [];

  constructor(
    private apiService: apiService,
    private formBuidler: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCatalogo();

    this.getServicios();
  }

  //------------------------------CATALOGO
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

  showError = false;
  errorMessage = '';

  insertCatalogoForm = this.formBuidler.group({
    titulo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    img: ['', [Validators.required]],
    item: ['', [Validators.required]],
  });

  insertCatalogo() {
    if (this.insertCatalogoForm.valid) {
      this.apiService
        .createCatalogo(this.insertCatalogoForm.value as CatalogoModel)
        .subscribe({
          next: (response) => {
            if (response) {
              this.insertCatalogoForm.reset();
              this.OcultarFormulario();
              this.toastr.success('Se creó correctamente.');
            } else {
              this.showError = true;
            }
          },
        });
    } else {
      this.insertCatalogoForm.markAllAsTouched();
    }
    console.log(this.insertCatalogoForm.value);
  }

  get titulo() {
    return this.insertCatalogoForm.controls.titulo;
  }

  get descripcion() {
    return this.insertCatalogoForm.controls.descripcion;
  }
  get img() {
    return this.insertCatalogoForm.controls.img;
  }
  get item() {
    return this.insertCatalogoForm.controls.item;
  }

  // FORMULARIO CATALOGO

  public formVisible: boolean = false;

  MostrarFormulario() {
    this.formVisible = true;
  }

  OcultarFormulario() {
    this.formVisible = false;
  }

  //--------------------------------------SERVICIOS
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

  // FORMULARIO SERVICIOS

  public formServicios: boolean = false;

  MostrarFormularioS() {
    this.formServicios = true;
  }

  OcultarFormularioS() {
    this.formServicios = false;
  }
}
