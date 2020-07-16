import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
    
  }

  newProduct(item)
  {
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }

  deleteProducts(id){
    return this.http.post("http://localhost:3000/delete",{"id":id})
    .subscribe(data =>{console.log(data)})
  }

  editProduct(id){
    return this.http.get("http://localhost:3000/edit/"+id);
    }

  
  updateProduct(item){
    return this.http.post("http://localhost:3000/update",{"product":item})
    .subscribe(data => {console.log("updated"+data)})
  }

  

}
