import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String = "Product List";

  products: ProductModel[];
  imageWidth: number =50;
  imageMargin: number = 2;

  showImage: boolean = false;

  constructor(private productService: ProductService,private router:Router) { }
  productItem = new ProductModel(null,null,null,null,null,null,null,null);

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
 
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) =>{
      this.products = JSON.parse(JSON.stringify(data));
    })
  }

  deleteProduct(item){
  console.log(item);
    if(confirm(`Do you want to delete the product`)){
     this.productService.deleteProducts(item)
     const id=this.products.indexOf(this.productItem)
     this.products.splice(id,1);
     this.router.navigate(['/']);
     
    
      
   
   
    }
  }

}
