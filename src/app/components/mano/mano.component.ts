import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mano',
  templateUrl: './mano.component.html',
  styleUrls: ['./mano.component.css']
})
export class ManoComponent {
  @Input()
  public texto: string;
  constructor() {
    this.texto = "moveRight"
  }
}


