import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { TempletformComponent } from './templetform/templetform.component';
import { AuthGuard } from './auth.guard';



const routes : Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'}, // localhost:4200
  {path: 'login', component: LoginComponent}, 
  { path: 'about-us', component: AboutusComponent}, // localhost:4200/about-us
  { path: 'contact-us', component: ContactusComponent},
  {path: 'product', canActivate: [AuthGuard], loadChildren: './product/products.module#ProductsModule'},
  {path: 'posts',component: PostlistComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  {path: 'templet', component:TempletformComponent},

   // Single router Outlet
  // { path: 'product', children: [ // localhost:4200/product
  //   { path: '', component: ProductComponent},
  //   {path : 'laptop', component: LaptopComponent},
  //   {path: 'tv', component: TvComponent},
  //   {path: 'mobile', component: MobileComponent},
  //   {path: 'washingmachine', component: WashingmashinComponent}
  // ]}, 

  // Multiple Router Outlet
//   { path: 'product', component: ProductComponent, children: [ // localhost:4200/product
//   {path : 'laptop', component: LaptopComponent},
//   {path: 'tv', component: TvComponent},
//   {path: 'mobile', component: MobileComponent},
//   {path: 'washingmachine', component: WashingmashinComponent}
// ]},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('App Routing module Called');
    
  }
 }
