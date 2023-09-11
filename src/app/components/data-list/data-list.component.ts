import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  data: any;
  dataArray: any[] = [
    {
      id: 1,
      name: 'Guillem',
      surnames: 'Rivas Martorell',
      email: 'rivasmartorellguillem@gmail.com',
      password: 'password123',
      passwordConfirmed: 'password123'
    }
  ];

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
    this.DataService.listData$.subscribe(data => {
      if (data != null) {
        this.data = data;
        this.dataArray.push(this.data);
        this.data.id = this.dataArray.length;
        console.log("hola desde list");
      }
    });
  }

  editData(id: number) {
    const data = this.dataArray[id - 1];
    this.DataService.sendFormData(data);
  }
}
