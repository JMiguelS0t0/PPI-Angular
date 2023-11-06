import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { apiService } from '../../services/api.service';
import { CatalogoModel, ServiciosModel } from 'src/app/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  public listacatalogo: any = [];
  public listaservicios: any = [];
  public nombresCatalogo: any[] = [];

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
      this.listacatalogo = catalogo;

      this.nombresCatalogo = catalogo;
      console.log('Nombres', this.nombresCatalogo);
    });
  }

  deleteCatalogo(Id: number) {
    this.apiService.deleteCatalogo(Id);
    this.getCatalogo();
  }

  showError = false;
  errorMessage = '';

  insertCatalogoForm = this.formBuidler.group({
    Id: [''],
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    img: ['', [Validators.required]],
    items: ['', [Validators.required]],
  });

  insertCatalogo() {
    if (this.insertCatalogoForm.valid) {
      this.apiService
        .createCatalogo(
          this.insertCatalogoForm.value as unknown as CatalogoModel
        )
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
    // console.log(this.insertCatalogoForm.value);
  }

  get nombre() {
    return this.insertCatalogoForm.controls.nombre;
  }

  get descripcion() {
    return this.insertCatalogoForm.controls.descripcion;
  }
  get img() {
    return this.insertCatalogoForm.controls.img;
  }
  get items() {
    return this.insertCatalogoForm.controls.items;
  }

  // FORMULARIO INSERT CATALOGO

  public formVisible: boolean = false;

  MostrarFormulario() {
    this.formVisible = true;
  }

  OcultarFormulario() {
    this.formVisible = false;
  }

  // FORMULARIO UPDATE CATALOGO

  public formUpdateVisible: boolean = false;

  private catalogoIdToUpdate: number | null = null;

  updateCatalogo() {
    if (this.insertCatalogoForm.valid && this.catalogoIdToUpdate) {
      const catalogoData = this.insertCatalogoForm
        .value as unknown as CatalogoModel;

      this.apiService
        .updateCatalogo(catalogoData, this.catalogoIdToUpdate)
        .subscribe({
          next: (response) => {
            if (response) {
              this.insertCatalogoForm.reset();
              this.OcultarUpdateFormulario();
              this.toastr.success('Se actualizó correctamente.');

              // Actualiza la lista de catálogos después de una actualización exitosa
              this.getCatalogo();
            } else {
              this.showError = true;
            }
          },
        });
    } else {
      this.insertCatalogoForm.markAllAsTouched();
    }
  }

  MostrarFormularioUpdate(Id: number) {
    this.formUpdateVisible = true;
    this.catalogoIdToUpdate = Id;
  }

  OcultarUpdateFormulario() {
    this.formUpdateVisible = false;
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

  insertedServiciosForm = this.formBuidler.group({
    descripcion: ['', [Validators.required]],
    paquete: ['', [Validators.required]],
    img: ['', [Validators.required]],
    personalizacion: ['', [Validators.required]],
  });

  insertServicios() {
    if (this.insertedServiciosForm.valid) {
      this.apiService
        .createServicio(
          this.insertedServiciosForm.value as unknown as ServiciosModel
        )
        .subscribe({
          next: (response) => {
            if (response) {
              this.insertedServiciosForm.reset();
              this.OcultarFormulario();
              this.toastr.success('Se creó correctamente.');
            } else {
              this.showError = true;
            }
          },
        });
    } else {
      this.insertedServiciosForm.markAllAsTouched();
    }
    console.log(this.insertedServiciosForm.value);
  }

  get paqueteServicios() {
    return this.insertedServiciosForm.controls.paquete;
  }

  get personalizacion() {
    return this.insertedServiciosForm.controls.personalizacion;
  }
  get descripcionServicios() {
    return this.insertedServiciosForm.controls.descripcion;
  }

  get imgServicios() {
    return this.insertedServiciosForm.controls.img;
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
