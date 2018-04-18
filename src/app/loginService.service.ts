import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Admin } from './login/login.component';
@Injectable()
export class LoginService {
stat : any;
   constructor(public http:Http,) { }
  login(admin : Admin)
  {
    var url ='http://localhost:9779/login/'+admin.attId+'/'+admin.password;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("Login url "+url);
    return this.http.get(url,options).map(res => res.json()); 
   }
  
}