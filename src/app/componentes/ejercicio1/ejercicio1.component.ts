import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {
  public edadUno;
  public edadDos;
  public suma;
  public promedio;

  constructor() { }

  ngOnInit(): void {
  }

  Calcular(){
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }

  Limpiar(){
    this.edadUno='';
    this.edadDos='';
    this.suma='';
    this.promedio='';
  }
}
