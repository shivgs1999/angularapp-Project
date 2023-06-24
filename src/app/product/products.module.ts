import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { WashingmashinComponent } from './washingmashin/washingmashin.component';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';

const prodRoutes : Routes = [
  { path: '', component: ProductComponent, children: [ // localhost:4200/product
    {path : 'laptop', component: LaptopComponent},
    {path: 'tv', component: TvComponent},
    {path: 'mobile', component: MobileComponent},
    {path: 'washingmachine', component: WashingmashinComponent}
  ]},
]
@NgModule({
  declarations: [
    ProductComponent,
    MobileComponent,
    LaptopComponent,
    TvComponent,
    WashingmashinComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes)
  ],
  exports: [RouterModule]

})
export class ProductsModule { 

  constructor() {
   // console.log('ProductsModule called');
  }
}
