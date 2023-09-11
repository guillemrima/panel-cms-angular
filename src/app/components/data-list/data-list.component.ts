import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  data: any;
  dataArray: any[] = [];

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
    this.DataService.data$.subscribe(data => {
      if (data != null) {
        this.data = data;
        this.dataArray.push(this.data)
        this.data.id = this.dataArray.length
      }
    })
  }
}
