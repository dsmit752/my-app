import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ProductsComponent } from './products/products.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewAssetsComponent } from './new-assets/new-assets.component';
import { ListAssetsComponent } from './list-assets/list-assets.component';
import { HomeComponent } from './home/home.component';
import { EditAssetsComponent } from './edit-assets/edit-assets.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  /*{ path: 'products', component: ProductsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },*/
  { path: '/', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent}, //login path
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupFormComponent}, //signup path

  //Asset Module Component paths
  //{ path: 'detail/:id', component: ProductDetailComponent },
  { path: 'assets', component: NewAssetsComponent },
  { path: 'listassets', component: ListAssetsComponent },
  { path: 'editAssets', component: NewAssetsComponent },

  //User Module Component Paths
  { path: 'create-user', component: AddUserComponent },
  { path: 'view-user/:id', component: ViewUserComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'delete-user/:id', component: DeleteUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
