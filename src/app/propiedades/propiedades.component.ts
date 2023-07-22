import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent {
  title = 'Ejemplo de propiedades de componentes';
  ponFondo = true;
  mostrar = true;
  habilitar = false;
  referencia = "http://www.google.com";

}
