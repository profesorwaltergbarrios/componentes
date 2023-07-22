import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  texto: string = '';
  saludar():void {
    this.texto = "Desde el componente saludo";
  }
}
