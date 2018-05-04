import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { SlicePipe } from '@angular/common';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { DOCUMENT } from '@angular/platform-browser';
import { isNumber } from 'util';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  
  public teclado:Array<any>;
  public operacion:any;

  constructor() {

    this.teclado = [
      {"nombre":"CLEAR", "btn":"btn-1"},{"nombre": "|<-","btn":"btn-2"},{"nombre": "1/x","btn":"btn-3"},{"nombre": "±","btn":"btn-4"},{"nombre": "√", "btn":"btn-5"},
      {"nombre": "%","btn":"btn-6"},{"nombre": "/","btn":"btn-7"},{"nombre": "7","btn":"btn-8"},{"nombre": "8","btn":"btn-9"},{"nombre": "9","btn":"btn-10" },
      {"nombre": "*","btn":"btn-11"},{"nombre": "4","btn":"btn-12"},{"nombre": "5","btn":"btn-13"},{"nombre": "6","btn":"btn-14"},{"nombre": "-","btn":"btn-15"},
      {"nombre": "1","btn":"btn-16"},{"nombre": "2","btn":"btn-17"},{"nombre": "3","btn":"btn-18"},{"nombre": "+","btn":"btn-19"},{"nombre": "0","btn":"btn-20"},
      {"nombre": ".","btn":"btn-21"},{"nombre": "=","btn":"btn-22"},
    ]
  }
  
  ngOnInit(){
    document.addEventListener('keyup',  function(e){
    console.log(e);
      try{
      var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
      var operacion:string = eval(operacion);
      if(Number(operacion)){
          (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
        }else{
          (<HTMLInputElement>document.getElementById("num-area")).value = "undefined";
        }
      }
      catch(error){
        console.log(error);
      }
    });
  }
  btn1(){
    (<HTMLInputElement>document.getElementById("operacion")).value="";
    (<HTMLInputElement>document.getElementById("num-area")).value="";
  }
  btn2(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var log = operacion.length;
    var lon = log -1;
    var operacion = operacion.substr(0,lon);
    (<HTMLInputElement>document.getElementById("operacion")).value = operacion;
    var operacion = "";
  }
  btn3(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion:string = eval(operacion);
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value = "1/"+operacion;
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value =operacion;
  }
  btn4(){
    var operacion = (<HTMLInputElement>document.getElementById("num-area")).value;
    var val = operacion.split("-")[0];
    if(val == ""){
      var operacion = operacion.split("-")[1];
      (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
      (<HTMLInputElement>document.getElementById("operacion")).value = operacion;
    }else{
      var operacion = "-"+operacion; 
      (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
      (<HTMLInputElement>document.getElementById("operacion")).value = operacion;
    }
  }
  btn5(){
    var operacion = (<HTMLInputElement>document.getElementById("num-area")).value;
    console.log(operacion);
    var operacion:string = eval(operacion);
    var opera = Number(operacion);
    var opera = Math.sqrt(opera);
    console.log(opera);
    if(Number(opera)){
      console.log("es numero ");
      var operacion = String(opera);
      (<HTMLInputElement>document.getElementById("operacion")).value = operacion;
      (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
    }else{
      console.log("no es numero");
      (<HTMLInputElement>document.getElementById("num-area")).value = "undefined";
    }
    // var operacion = eval(operacion);
  }
  btn6(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value="("+operacion+")/100";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
    if(Number(operacion)){
      // (<HTMLInputElement>document.getElementById("num-area")).value = "undefined";
    }else{
    }
  }
  btn7(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion:string = eval(operacion);
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"/";
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn8(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=(operacion)+"7";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn9(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=(operacion)+"8";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn10(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"9";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn11(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value="("+operacion+")*";
  }
  btn12(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"4";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn13(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"5";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn14(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"6";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn15(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"-";
  }
  btn16(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"1";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn17(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"2";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn18(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"3";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn19(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"+";
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn20(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+"0";
    var operacion:string = eval(operacion);
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn21(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value=operacion+".";
    (<HTMLInputElement>document.getElementById("num-area")).value = operacion;
  }
  btn22(){
    var operacion = (<HTMLInputElement>document.getElementById("operacion")).value;
    console.log(operacion);
    var operacion:string = eval(operacion);
    console.log(operacion);
    if(Number(operacion)){
     (<HTMLInputElement>document.getElementById("operacion")).value = operacion; 
    }else{
      (<HTMLInputElement>document.getElementById("num-area")).value = "undefined"; 
    }
  }
}

