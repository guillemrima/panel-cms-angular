import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/user-service/data-service.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog-service/confirm-dialog.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private DataService: DataService, private ConfirmDialogService: ConfirmDialogService) { }

  @Input() data: any;

  ngOnInit(): void {
  }

  deleteUser(): void {
    this.ConfirmDialogService.confirmDeleteUser(this.data);
  }

  editUser(): void {
    this.DataService.setSelectedData(this.data.id);
  }
}
