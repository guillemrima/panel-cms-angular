import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  confirmDeleteUser(data: any) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '400ms',
      data: { data }
    })
  }
}
