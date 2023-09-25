import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/user-service/data-service.service';
import { SnackbarService } from 'src/app/services/snackbar-service/snackbar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AvatarService } from 'src/app/services/avatar-service/avatar.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  imageModalOpened = false;
  selectedAvatar: number | null = null;
  avatarImages: any;

  constructor(
    private DataService: DataService,
    private http: HttpClient,
    private AvatarService: AvatarService,
    private SnakbarService: SnackbarService

  ) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/avatars').subscribe(response => {
      if (response) {
        this.avatarImages = response
      }
    })
  }

  selectAvatar(index: number) {
    this.selectedAvatar = index;

    setTimeout(() => {
      if (this.selectedAvatar != null)
        this.DataService.SelectImageModal(this.avatarImages[this.selectedAvatar])
    }, 250)
  }

  closeImageModal(): void {
    this.DataService.closeImageModal()
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    // Llama a la función saveAvatar con las cabeceras configuradas
    this.saveAvatar(file);
  }

  saveAvatar(file: any): void {
    const fileData = new FormData();
    fileData.append('file', file);

    this.http.post('http://localhost:8080/avatars', fileData).subscribe((response: any) => {

      this.SnakbarService.showSnackBar(response.message);
    });
  }
}
