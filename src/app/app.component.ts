import { Component } from '@angular/core';
import { AssetService } from './asset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Asset Management';

  constructor(private _myService: AssetService) { }
  
}

