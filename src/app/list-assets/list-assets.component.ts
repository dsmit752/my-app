import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';
import { NewAssetsComponent } from '../new-assets/new-assets.component';
import { MatButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-list-assets',
  templateUrl: './list-assets.component.html',
  styleUrls: ['./list-assets.component.css']
})
export class ListAssetsComponent implements OnInit {

//declare variable to hold response and make it public to be accessible from components.html 
  public item: any;
  
  //initialize the call using AssetService 
  constructor(private _myService: AssetService) { }
  ngOnInit() {
      this.getItems();
  }
  //method called OnInit
  getItems() {
      console.log(this.item)
      this._myService.getItems().subscribe(
         //read data and assign to public variable assets
        data => { this.item = data},
         
          err => console.error(err),
          () => console.log('finished loading')
      );
  }
  
  onDelete(itemId: string) {
    this._myService.deleteItem(itemId);
}

}