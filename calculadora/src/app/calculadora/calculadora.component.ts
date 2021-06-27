import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  //------VARIABLES CALCULADORA #1----------
  ingresados="";
  operador="";
  operando1=0;
  operando2=0;
  resultado=0;

  //------VARIABLES CALCULADORA #2-------------
  inputOperando1="";
  inputOperando2="";
  resultadoDos="";

  constructor() { }

  ngOnInit(): void {
  }

  //-------------------FUNCIONES CALCULADORA #1-------------------


  agregar(item:number){
    try{
     if(this.resultado==parseInt(this.ingresados)){
       this.ingresados= item.toString();
       this.operador="";
       this.operando1=0;
       this.operando2=0;
       this.resultado=0;
     }
     else{
       this.ingresados= this.ingresados+item;
      
     }
 
    } 
    catch(e){
      console.log("An error occurredon Agregar Item=>",e)
    }
   }
 
   sumar(){
     try{
       if(this.ingresados!=""){
         this.operando1= parseInt(this.ingresados);
       }
       this.operador='+';
       this.ingresados="";
       
     } 
     catch(e){
       console.log("An error occurredon sumar=>",e)
     }
   }
 
   restar(){
     try{
       if(this.ingresados!=""){
         this.operando1= parseInt(this.ingresados);
       }
       this.operador='-';
       this.ingresados="";
     } 
     catch(e){
       console.log("An error occurredon restar=>",e)
     }
   }
 
   multiplicar(){
     try{
       if(this.ingresados!=""){
         this.operando1= parseInt(this.ingresados);
       }
       this.operador='*';
       this.ingresados="";
     } 
     catch(e){
       console.log("An error occurredon multiplicar=>",e)
     }
   }
 
   dividir(){
     try{
       if(this.ingresados!=""){
         this.operando1= parseInt(this.ingresados);
       }
       this.operador='/';
       this.ingresados="";
     } 
     catch(e){
       console.log("An error occurredon dividir=>",e)
     }
   }
 
   calcular(){
     try{
       switch(this.operador){
         case '+':
           this.operando2=parseInt(this.ingresados)
           this.resultado=(this.operando1)+(this.operando2);
           this.ingresados= this.resultado.toString();
           break;
 
         case '-':
           this.operando2=parseInt(this.ingresados)
           this.resultado=this.operando1-this.operando2;
           this.ingresados= this.resultado.toString();
           break;
 
         case '*':
           this.operando2=parseInt(this.ingresados)
           this.resultado=this.operando1*this.operando2;
           this.ingresados= this.resultado.toString();
           break;
 
         case '/':
           this.operando2=parseInt(this.ingresados)
           this.resultado=this.operando1/this.operando2;
           this.ingresados= this.resultado.toString();
           break;
           
       }
       
     } 
     catch(e){
       console.log("An error occurredon calcular=>",e)
     }
   }
 
   limpiar(){
     try{
       this.ingresados="";
       this.operador="";
       this.operando1=0;
       this.operando2=0;
       this.resultado=0;
     } 
     catch(e){
       console.log("An error occurredon limpiar =>",e)
     }
   }
 
 //-------------------FUNCIONES CALCULADORA #2-------------------
 
 
  sumarDos(){
    try{
     var resul= parseInt(this.inputOperando1)+parseInt(this.inputOperando2);
     this.resultadoDos=(resul.toString());
   
    }
    catch(e){
      console.log("An error occurredon sumar=>",e)
    }
  }
 
  restarDos(){
    try{
     var resul= parseInt(this.inputOperando1)-parseInt(this.inputOperando2);
     this.resultadoDos=resul.toString();
    } 
    catch(e){
      console.log("An error occurredon restar=>",e)
    }
  }
 
  multiplicarDos(){
    try{
     var result=parseInt(this.inputOperando1)*parseInt(this.inputOperando2)
     this.resultadoDos=result.toString();
    } 
    catch(e){
      console.log("An error occurredon multiplicar=>",e)
    }
  }
 
  dividirDos(){
    try{
     var resul= parseInt(this.inputOperando1)/parseInt(this.inputOperando2);
     this.resultadoDos=resul.toString();
    } 
    catch(e){
      console.log("An error occurredon dividir=>",e)
    }
  }
 
  limpiarDos(){
   try{
    this.resultadoDos="";
    this.inputOperando1="";
    this.inputOperando2="";
   } 
   catch(e){
     console.log("An error occurredon llimpiar=>",e)
   }
 }
 

}
