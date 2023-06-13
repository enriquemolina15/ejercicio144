import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio144';
  manoTexto!: string ;
  changeManoTexto(newTexto: string) {
    this.manoTexto = newTexto;
  }
}
