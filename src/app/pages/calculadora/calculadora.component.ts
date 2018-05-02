import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  
  public teclado:Array<any>;
  
  constructor() {
      this.teclado = [
      {"nombre":"CLEAR", "btn":"btn-1"},{"nombre": "|","btn":"btn-2"},{"nombre": "1/x","btn":"btn-3"},{"nombre": "±","btn":"btn-4"},{"nombre": "^", "btn":"btn-5"},
      {"nombre": "%","btn":"btn-6"},{"nombre": "/","btn":"btn-7"},{"nombre": "7","btn":"btn-8"},{"nombre": "8","btn":"btn-9"},{"nombre": "9","btn":"btn-10" },
      {"nombre": "*","btn":"btn-11"},{"nombre": "4","btn":"btn-12"},{"nombre": "5","btn":"btn-13"},{"nombre": "6","btn":"btn-14"},{"nombre": "-","btn":"btn-15"},
      {"nombre": "1","btn":"btn-16"},{"nombre": "2","btn":"btn-17"},{"nombre": "3","btn":"btn-18"},{"nombre": "+","btn":"btn-19"},{"nombre": "0","btn":"btn-20"},
      {"nombre": ".","btn":"btn-21"},{"nombre": "=","btn":"btn-22"},
    ]
   }

  ngOnInit() {
  }

}
