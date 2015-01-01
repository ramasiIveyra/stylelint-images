import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DataTableItem } from './data-table.model';
import { DataTableService } from './data-table.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatablePageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource<DataTableItem>();

  constructor(
    private dialog: MatDialog,
    private dataTableService: DataTableService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('DataTableComponent initialized');
    this.loadData();
  }

  loadData(): void {
    this.dataTableService.getData().subscribe((data) => {
      this.dataSource.data = data;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  openEditDialog(item: DataTableItem): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '300px',
      data: { item },
    });

    dialogRef.afterClosed().subscribe((result: DataTableItem) => {
      if (result) {
        this.dataTableService.editItem(result).subscribe(() => this.loadData());
      }
    });
  }

  deleteItem(id: number): void {
    this.dataTableService.deleteItem(id).subscribe(() => this.loadData());
  }
}
