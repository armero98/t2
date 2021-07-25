import { Component, OnInit } from '@angular/core';
import { Factura } from './factura.model';
import { Item } from './item.model';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']}
  )

export class FacturaComponent implements OnInit {
  ngOnInit(): void {} 
  constructor(){}

  facturas : Factura [] = []

  title = 'sistema de factura'
  nombreProducto=""
  saveFactura = true
  siHay = true
  borrar = false
  nombre = "";
  precio = 0;
  


    agregarItem(id:number){ 
      try {
        if(this.nombre != "" && this.precio != 0){
          let item = new Item (this.nombre, this.precio, id)
          this.facturas[id].items.push(item) 
          this.nombre = ""
          this.precio = 0
        }
        return
      }catch (e) {
        console.log('no hay item para agregar=>', e)
      }
    }

    guardarFactura(){ 
      try {
        if(this.facturas.length > 1){
          this.saveFactura =! this.saveFactura}
          let factura = new Factura (this.facturas.length + 1, new Date(), [])
          this.facturas.push(factura)
          return
      }catch (e) {
        alert('no hay registro en la factura para guardar')
      }
    }

    borrarFactura(){
      try {
        if( this.borrar =! false ){}
        this.facturas.indexOf
      } catch (e) {
        alert('el registro seleccionado no existe')
      }
    }

 
}
