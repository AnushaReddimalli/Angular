import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Product } from './product/product.component';

@Injectable()
export class ProductService {

  constructor(public http:Http,) { }

  getProduct(id:string)
  {
    console.log("ID : "+id);
    var url ='http://localhost:9779/products/'+id;  
    console.log("url to get one product"+url);  
    return this.http.get(url).map(res => res.json());  
  }
  getAllProducts()
  {
    var url ='http://localhost:9779/products';    
    return this.http.get(url).map(res => res.json());    
  }
  editProduct(product : Product)
  {
    var url = 'http://localhost:9779/products/'+product.productId;
    console.log("url to update product : "+url);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(url,product,options);
  }
  addProduct(product : Product)
  {
    var url = 'http://localhost:9779/products';
    console.log("url to update product : "+url);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url,product,options);
  }
  deleteProduct(id:string)
  {
    var url = 'http://localhost:9779/products/'+id;
    console.log("url to delete product : "+url);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(url,options);
  }
  
}