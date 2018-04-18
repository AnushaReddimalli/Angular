import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productService.service';
import { Product } from '../product/product.component';
import {ActivatedRoute ,Router} from "@angular/router";
@Component({
  selector: 'app-update-add',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 product:Product = new Product();
id:any
  constructor(public dataService:ProductService, private aRouter:ActivatedRoute, private route: Router) {
   
   }
  ngOnInit() {
    this.id = this.aRouter.snapshot.paramMap.get('productId');
    this.dataService.getProduct(this.id).subscribe(product => this.product = product);
    
  }
  update(product:Product)
  {
      this.dataService.editProduct(product).subscribe(
      (resp) => {
        console.log(resp);
        this.route.navigate(['product']);
      }
    )
  }
}