import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
import { ProductService } from '../productService.service';
import {ActivatedRoute ,Router} from "@angular/router";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product:Product = new Product();
  constructor(public dataService:ProductService, private route: Router) { 

  }

  ngOnInit() {
  }
  Add(product:Product)
  {
      this.dataService.addProduct(product).subscribe(
      (resp) => {
        console.log(resp);
        this.route.navigate(['product']);
      }
    )
  }

}
