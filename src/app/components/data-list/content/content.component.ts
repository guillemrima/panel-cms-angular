import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() data: any;
  @Output() sendEditData = new EventEmitter<number>();
  @Output() sendDeleteData = new EventEmitter<number>();

  ngOnInit(): void {
  }

  editData(): void {
    this.sendEditData.emit(this.data.id);
  }

  deleteData(): void {
    this.sendDeleteData.emit(this.data.id);
  }
}
