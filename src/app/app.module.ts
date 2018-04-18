import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './productService.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './loginService.service';
import { UpdateComponent } from './update/update.component';
import { AppRouteModule }     from './app.routing';
import { AddComponent } from './add/add.component';
import { ErrorComponent } from './error/error.component';  

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    UpdateComponent,
    AddComponent,
    ErrorComponent
  ],
  imports: [
    AppRouteModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ProductService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
