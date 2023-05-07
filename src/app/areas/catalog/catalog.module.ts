import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CatalogRoutingModule,
    CommonModule
  ]
})
export class CatalogModule { }
