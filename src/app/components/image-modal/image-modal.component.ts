import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/user-service/data-service.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  imageModalOpened = false;
  avatarFiles = [
    'avatar-1.jpg',
    'avatar-2.jpg',
    'avatar-3.jpg',
    'avatar-4.jpg',
    'avatar-5.jpg',
    'avatar-6.jpg',
    'avatar-7.jpg',
    'avatar-8.jpg'
  ]

  constructor(private DataService: DataService) { }

  ngOnInit() {
  }

}
