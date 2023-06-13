import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-jabonera',
  templateUrl: './jabonera.component.html',
  styleUrls: ['./jabonera.component.css']
})
export class JaboneraComponent {
  public nombre: string;
  public nivelMaximo: number;
  public nivelActual: number;
  public cantidadDispensada: number;
  public bateria: number;
  public encendido: boolean;

  public imagenOn: string;
  public imagenOf: string;
  constructor(){
    this.nombre = "Philips";
    this.nivelMaximo = 500;
    this.nivelActual = 0;
    this.cantidadDispensada = 5;
    this.bateria = 100;
    this.encendido = false;
    this.imagenOn = "assets/img/jabonera-on.png";
    this.imagenOf = "assets/img/jabonera-off.png";
  }

  public comprobarAjustes(): void{
    if(this.nivelActual < 0){
      this.nivelActual = 0;
    }
    if(this.bateria < 0){
      this.bateria = 0;
    }
    if(this.bateria === 0){
      this.encendido = false;
    }
  }
  public acercar : boolean = false;
  
  public dispensar(){
    if(this.encendido == true){
      this.nivelActual = this.nivelActual - this.cantidadDispensada;
      this.bateria = this.bateria - 3;
      this.comprobarAjustes();
    }
    
    
  }
  public rellenarJabon(){
    
    const intervalo = setInterval(() => {
      this.nivelActual += 5;
      if (this.nivelActual >= 500) {
        this.nivelActual = 500;
        clearInterval(intervalo);
      }
    }, 40); // 40 milisegundos para simular el incremento gradual
  }
  public cargando: boolean = false;
  public cargarBateria(){
    this.cargando = true; 
    const intervalo = setInterval(() => {
      this.bateria += 1;
      if (this.bateria >= 100) {
        this.bateria = 100;
        clearInterval(intervalo);
        this.cargando = false;
      }
    }, 40); // 40 milisegundos para simular el incremento gradual
  }
  
  public power(){
    this.bateria -= 0.1;
    this.encendido = !this.encendido
    this.comprobarAjustes();
  }
  @Output() jaboneraup = new EventEmitter<string>();
  
  up() {
      this.jaboneraup.emit("'moveRight'");
  }
  @Output() jaboneradown = new EventEmitter<string>();
  down(){
    this.jaboneradown.emit("'moveLeft'")
  }
  
}