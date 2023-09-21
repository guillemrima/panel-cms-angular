import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/user-service/data-service.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog-service/confirm-dialog.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  avatarImage: any;

  constructor(private DataService: DataService, private ConfirmDialogService: ConfirmDialogService, private http: HttpClient) { }

  @Input() data: any;

  ngOnInit(): void {
    if (this.data.avatarId) {
      const avatarId = this.data.avatarId
      this.http.get(`http://localhost:8080/avatars/${avatarId}`).subscribe(avatar => {
        this.avatarImage = avatar
      })
    }
  }

  deleteUser(): void {
    this.ConfirmDialogService.confirmDeleteUser(this.data);
  }

  editUser(): void {
    this.DataService.setSelectedData(this.data.id);
  }
}
