import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin:Admin=new Admin();
  statusCode :any;
  constructor(private loginService:LoginService, private route : Router) { }
  ngOnInit() {
    
  }
  adminLogin(admin : Admin)
  { 
   this.loginService.login(admin).subscribe(
    (resp) => {
      console.log("resjksdfkdsfh "+resp);
      if(resp == "200" ){
        this.route.navigate(['product']);
      }else 
      {
        this.route.navigate(['error']);
        
      }
    }
   )
  }
}
export class Admin{
  attId : string;
  password : string;  
  }
