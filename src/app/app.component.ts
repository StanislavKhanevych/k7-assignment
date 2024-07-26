import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddProjectPopupComponent } from './add-project-popup/add-project-popup.component';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <button class="open-dialog-button" mat-button (click)="openDialog()">
      Add Project
    </button>
  </div> `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddProjectPopupComponent);
  }
}
