import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-project-popup',
  templateUrl: './add-project-popup.component.html',
  styleUrls: ['./add-project-popup.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class AddProjectPopupComponent {
  projectForm: FormGroup;
  names = ['Ninja Tunes', 'Kindergarten', 'Anklav', 'UNPOSED', 'Nerve Collect'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProjectPopupComponent>
  ) {
    this.projectForm = this.fb.group({
      projectBaseCatalogNumber: ['', Validators.required],
      artist: ['', Validators.required],
      projectTitle: ['', Validators.required],
      label: ['', Validators.required],
      albumType: ['', Validators.required],
    });
  }

  setAlbumType(type: string): void {
    this.projectForm.get('albumType')?.setValue(type);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onAddProject(): void {
    if (this.projectForm.valid) {
      this.dialogRef.close();
    }
  }
}
