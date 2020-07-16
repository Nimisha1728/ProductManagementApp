import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component:ProductListComponent
  },
  {
    path:'add',
    component:NewProductComponent,
    canActivate:[AuthGuard],
   
  },
  {
    path:"edit/:p_id",
    
    component:ProductEditComponent,
   
    
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
