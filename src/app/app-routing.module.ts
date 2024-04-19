import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    title: 'Login',
    path: 'login',
    component: LoginPageComponent,
  },
  {
    title: 'details',
    path: 'detail/:id',
    component: ProductDetailComponent,
  },

  {
    title: 'home',
    path: '**',
    component: ProductListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
