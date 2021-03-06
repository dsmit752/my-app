import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AssetService } from '../asset.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-assets',
  templateUrl: './edit-assets.component.html',
  styleUrls: ['./edit-assets.component.css']
})
export class EditAssetsComponent implements OnInit {

  assetForm = this.fb.group({
    itemName: ['', Validators.required],
    itemModel: ['', Validators.required],
    itemDes: ['', Validators.required],
    itemSerial: ['', Validators.required],
    itemCost: ['', Validators.required],
    itemQty: ['', Validators.required],
  });

  public mode = 'Add'; //default mode
  private id: any; //item ID
  private item: any;  

  constructor(private fb: FormBuilder, private _myService: AssetService, private router:Router, public route: ActivatedRoute) { }

  
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
        if (paramMap.has('_id')){
            this.mode = 'Edit'; /*request had a parameter _id */ 
            this.id = paramMap.get('_id');

           
            this._myService.getItem(this.id).subscribe(
                data => { 
                    //read data and assign to private variable item
                    this.item = data;
                    //populate the contactName and  on the page
                    //notice that this is done through the two-way bindings
                    this.assetForm.patchValue({itemName: this.item.itemName})
                    this.assetForm.patchValue({itemModel: this.item.itemModel})
                    this.assetForm.patchValue({itemDes: this.item.itemDes})
                    this.assetForm.patchValue({itemSerial: this.item.itemSerial})
                    this.assetForm.patchValue({itemCost: this.item.itemCost})
                    this.assetForm.patchValue({itemQty: this.item.itemQty})
                },
                err => console.error(err),
                () => console.log('finished loading')
            );
        } 
        else {
            this.mode = 'Add';
            this.id = null; 
        }
    });
}
    


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log("You submitted: " + this.assetForm.get("itemName").value, + " " + this.assetForm.get("itemModel").value, + " " + this.assetForm.get("itemDes").value, + " " + this.assetForm.get("itemSerial").value, + " " + this.assetForm.get("itemCost").value, + " " + this.assetForm.get("itemQty").value);
    if (this.mode == 'Add')
    this._myService.addItem(this.assetForm.get("itemName").value, this.assetForm.get("itemModel").value, this.assetForm.get("itemDes").value, this.assetForm.get("itemSerial").value, this.assetForm.get("itemCost").value, this.assetForm.get("itemQty").value);
    if (this.mode == 'Edit')
    this._myService.updateItem(this.id,this.assetForm.get("itemName").value ,this.assetForm.get("itemModel").value ,this.assetForm.get("itemDes").value ,this.assetForm.get("itemSerial").value ,this.assetForm.get("itemCost").value, this.assetForm.get("itemQty").value);
    this.router.navigate(['/editAssets']);
   
  }

}
