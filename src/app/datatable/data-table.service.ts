import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataTableItem } from './data-table.model';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class DataTableService {
  private data: DataTableItem[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  getData(): Observable<DataTableItem[]> {
       return of(this.data);
  }

  editItem(updatedItem: DataTableItem): Observable<void> {
    const index = this.data.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.data[index] = { ...this.data[index], ...updatedItem };
    }
   return of().pipe(delay(500));
  }

  deleteItem(id: number): Observable<void> {
    this.data = this.data.filter(item => item.id !== id);
    return of().pipe(delay(500));
  }
}
