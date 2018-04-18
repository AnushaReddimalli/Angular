import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { NgModule }             from '@angular/core';
import { AddComponent } from './add/add.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
    { path: 'product', component: ProductComponent },
    {path: 'login', component: LoginComponent},
    {path : 'update', component: UpdateComponent},
    {path : 'add', component : AddComponent},
    {path : 'error', component : ErrorComponent},
    {path : '**', redirectTo: 'login'},
    
   ];
   @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
   export class AppRouteModule{}