import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FacturaComponent } from './factura/factura.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [		
    AppComponent,
      FacturaComponent,
      ItemComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
