import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productService.service';
import {Router,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product=new Product();
  allProducts:Product[];

  constructor(public productService:ProductService,private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts()
  { 
    console.log('all Products');
    this.productService.getAllProducts().subscribe(
      (resp) => {
        console.log(resp);
        this.allProducts=resp;
      }
    )
  }
  remove(prodid)
  {
    console.log("Removing products");
    this.productService.deleteProduct(prodid).subscribe(
      (resp) => {
        console.log(resp);
        this.getAllProducts();
      }
    )
  }

update(product)
{

  this.productService.editProduct(product).subscribe(
    (resp) => {
      console.log(resp);
      this.getAllProducts();
    }
  )
}

}
export class Product{
productId : string;
productName : string;
productDescription : string;
relatedProducts : string;
productImage : ImageData;
 
  constructor(){}

}
