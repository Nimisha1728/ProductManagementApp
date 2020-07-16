import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product-list/product.model';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {



  title:String = "Edit Product";
  p_id="";

  constructor(private productService: ProductService,
              private router:Router,
              private activatedroute:ActivatedRoute) {
 
               }

  productItem = new ProductModel(null,null,null,null,null,null,null,null);

  

  ngOnInit(): void {
   this.activatedroute.params.subscribe(params=>{
    this.p_id = params['p_id']
  });
  console.log(this.p_id);
    this.productService.editProduct(this.p_id).subscribe(data=>{
      this.productItem = JSON.parse(JSON.stringify(data));
      
      console.log(data)
     console.log(this.productItem);
            
       });
     
    
   
}
  updateProduct()
  {
    this.productService.updateProduct(this.productItem);
    console.log("updated");
    alert("Success");
    this.router.navigate(['/']);
  }

  
  
}
