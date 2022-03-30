import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { AssetService } from './asset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMS APPLICATION';

  constructor(private matDialog: MatDialog) {

  }

  onOpenDialog(){
    this.matDialog.open(DialogComponent);
  }
}

