import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'taller2';

  nombreProducto=""

  arrayItems = []

  arrayFacturas = []

  deshabilitado = true

  saveFactura = true

  producto : {
    id: number;
    nombre : string;
    precio : number;
  } = {id:1, nombre:"galletas", precio:2000 }
 

    onChange(){
    try {
      console.log(this.producto.id)
    } catch (error) {
      console.log('error')
    }}


     agregarItem(){ 
      try {
        if(cajaitem)
        this.deshabilitado =! this.deshabilitado
      }catch (e) {
        console.log('no hay item para agregar=>', e)
      }
    }

    guardarFactura(){ 
      try {
        if(this.arrayItems.length > 1){
          this.arrayFacturas.
        }
      }catch (e) {
        console.log('no hay factura que guardar', e)
      }
    }
}








  