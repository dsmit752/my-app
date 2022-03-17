import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAssetsComponent } from './new-assets/new-assets.component';
import { Routes, RouterModule } from '@angular/router';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AssetService } from './asset.service';
//import { InMemoryDataService } from './in-memory-data.service';
import { Product } from './products';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ListAssetsComponent } from './list-assets/list-assets.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { EditAssetsComponent } from './edit-assets/edit-assets.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    MessagesComponent,
    DashboardComponent,
    NewAssetsComponent,
    ListAssetsComponent,
    MatTableComponent,
    EditAssetsComponent,
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
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
//HttpClientInMemoryWebApiModule.forRoot(
  //InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
