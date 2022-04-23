import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
//import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MessagesComponent } from './messages/messages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAssetsComponent } from './new-assets/new-assets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AssetService } from './asset.service';
import { UsersService } from './users.service';
//import { InMemoryDataService } from './in-memory-data.service';
import { Product } from './products';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ListAssetsComponent } from './list-assets/list-assets.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { EditAssetsComponent } from './edit-assets/edit-assets.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
//import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
//import { ViewUserComponent } from './view-user/view-user.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    //ProductDetailComponent,
    MessagesComponent,
    //DashboardComponent,
    NewAssetsComponent,
    ListAssetsComponent,
    MatTableComponent,
    EditAssetsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    DialogComponent,
    LoginFormComponent,
    SignupFormComponent,
    AddUserComponent,
    ListUsersComponent,
    //DeleteUserComponent,
    EditUserComponent,
    //ViewUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,

    
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
//HttpClientInMemoryWebApiModule.forRoot(
  //InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [AssetService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
