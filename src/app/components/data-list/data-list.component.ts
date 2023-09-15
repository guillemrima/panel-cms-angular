import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/user-service/data-service.service';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  dataArray: any;
  private subscripcion: Subscription;

  constructor(private DataService: DataService, private http: HttpClient) {
    this.subscripcion = this.DataService.getUserData().subscribe(() => {
      this.getUserData()
    })
  }


  ngOnInit(): void {
    this.http.get('http://localhost:8080/users').subscribe(data => {
      this.dataArray = data
    })

  }

  getUserData() {
    this.http.get('http://localhost:8080/users').subscribe(data => {
      this.dataArray = data;
    })
  }
}
