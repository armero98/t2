import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  ngOnInit() {
  }

  title = 'taller2';
  nombreProducto=""
  arrayItems = []
  arrayFacturas = []
  deshabilitado = true
  saveFactura = true
  siHay = true
  nombre = "";
  precio = 0;


    agregarItem(){ 
      try {
        if(this.nombre != ""){
        this.agregarItem.push(cajaitem)
      }catch (e) {
        console.log('no hay item para agregar=>', e)
      }
    }

    guardarFactura(){ 
      try {
        if(this.arrayItems.length > 1){
          this.saveFactura =! this.saveFactura
          this.arrayFacturas.push;}
        }catch (e) {
        console.log('no hay factura que guardar', e)
      } 
    }

 
}
