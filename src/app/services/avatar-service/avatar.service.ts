import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiUrl = 'http://localhost:8080/avatars';

  constructor(
    private http: HttpClient
  ) { }

  createAvatar(avatar: FormGroup<any>) {
    const avatarPath = avatar.value.newAvatar;
    const pathSplited = avatarPath.split('\\');
    const avatarName = pathSplited[pathSplited.length - 1];

    const body = {
      name: avatarName
    }
    console.log(avatarName)
    this.http.post(this.apiUrl, body, this.httpOptions).subscribe()
  }
}
