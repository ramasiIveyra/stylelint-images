import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataTableItem } from '../data-table.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
})
export class EditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: DataTableItem }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(updatedItem: DataTableItem): void {
    this.dialogRef.close(updatedItem);
  }
}
