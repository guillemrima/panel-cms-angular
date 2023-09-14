import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private DataService: DataService) { }

  @Input() data: any;

  ngOnInit(): void {
  }

  deleteUser(): void {
    this.DataService.deleteUser(this.data.id);
  }

  editUser(): void {
    this.DataService.setSelectedData(this.data.id);
  }
}
