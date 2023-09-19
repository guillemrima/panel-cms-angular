import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/user-service/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'panel-cms-angular';
  imageModalOpened = false;

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.buttonImageModalClicked$.subscribe(clicked => {
      this.imageModalOpened = clicked;

    })
  }
}
