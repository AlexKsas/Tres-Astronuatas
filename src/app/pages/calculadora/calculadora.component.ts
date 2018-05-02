import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  
  public teclado:Array<any>;

  constructor() {
    function btn1(){
      alert("datos de prueba");
    }
    document.addEventListener('keyup',  function(){
      var oper = "";
      var oper = (<HTMLInputElement>document.getElementById("operacion")).value;
      var resul = eval(oper);
      (<HTMLInputElement>document.getElementById("num-area")).value = resul;
    });
      this.teclado = [
      {"nombre":"CLEAR", "btn":"btn-1"},{"nombre": "|<-","btn":"btn-2"},{"nombre": "1/x","btn":"btn-3"},{"nombre": "±","btn":"btn-4"},{"nombre": "^", "btn":"btn-5"},
      {"nombre": "%","btn":"btn-6"},{"nombre": "/","btn":"btn-7"},{"nombre": "7","btn":"btn-8"},{"nombre": "8","btn":"btn-9"},{"nombre": "9","btn":"btn-10" },
      {"nombre": "*","btn":"btn-11"},{"nombre": "4","btn":"btn-12"},{"nombre": "5","btn":"btn-13"},{"nombre": "6","btn":"btn-14"},{"nombre": "-","btn":"btn-15"},
      {"nombre": "1","btn":"btn-16"},{"nombre": "2","btn":"btn-17"},{"nombre": "3","btn":"btn-18"},{"nombre": "+","btn":"btn-19"},{"nombre": "0","btn":"btn-20"},
      {"nombre": ".","btn":"btn-21"},{"nombre": "=","btn":"btn-22"},
    ]
  }
  
  ngOnInit() {
    this.btn1();
    this.btn2();
    this.btn3();
    this.btn4();
    this.btn5();
    this.btn6();
    this.btn7();
    this.btn8();
    this.btn9();
    this.btn10();
    this.btn11();
    this.btn12();
    this.btn13();
    this.btn14();
    this.btn15();
    this.btn16();
    this.btn17();
    this.btn18();
    this.btn19();
    this.btn20();
    this.btn21();
    this.btn22();
  }
  btn1(){
    (<HTMLInputElement>document.getElementById("operacion")).value = "";
  }
  btn2(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    console.log(resul);
    var result = resul.slice(4, -2);
    console.log(resul);
    (<HTMLInputElement>document.getElementById("operacion")).value = result;
    // console.log("datos de preba");
  }
  btn3(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"1/X";
    
  }
  btn4(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"+-";
  }
  btn5(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"^";
  }
  btn6(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"%";
  }
  btn7(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"/";
  }
  btn8(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"7";
  }
  btn9(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"8";
  }
  btn10(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"9";
  }
  btn11(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"*";
  }
  btn12(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"4";
  }
  btn13(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"5";
  }
  btn14(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"6";
  }
  btn15(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"-";
  }
  btn16(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"1";
  }
  btn17(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"2";
  }
  btn18(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"3";
  }
  btn19(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"+";
  }
  btn20(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+"0";
  }
  btn21(){
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("operacion")).value = resul+".";
  }
  btn22(){
    var oper = (<HTMLInputElement>document.getElementById("operacion")).value;
    var resul = (<HTMLInputElement>document.getElementById("operacion")).value;
    (<HTMLInputElement>document.getElementById("num-area")).value = resul;
    (<HTMLInputElement>document.getElementById("operacion")).value = "";
    (<HTMLInputElement>document.getElementById("num-area")).value = "";
  }
}

