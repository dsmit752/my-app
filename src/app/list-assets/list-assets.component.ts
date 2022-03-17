import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';

import { MatButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-list-assets',
  templateUrl: './list-assets.component.html',
  styleUrls: ['./list-assets.component.css']
})
export class ListAssetsComponent implements OnInit {

//declare variable to hold response and make it public to be accessible from components.html 
  public capstone: any;
  
  //initialize the call using AssetService 
  constructor(private _myService: AssetService) { }
  ngOnInit() {
      this.getCapstones();
  }
  //method called OnInit
  getCapstones() {
      console.log(this.capstone)
      this._myService.getCapstones().subscribe(
        data => { this.capstone = data},
          //read data and assign to public variable assets
          err => console.error(err),
          () => console.log('finished loading')
      );
  }

  onDelete(capstoneId: string) {
    this._myService.deleteCapstone(capstoneId);
}

}