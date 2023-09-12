import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getUserDataEvent = new Subject<void>();

  private apiUrl = 'http://localhost:8080/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Otras cabeceras aquí, si es necesario
    }),
  };
  constructor(private http: HttpClient) { }

  createUser(data: any) {
    this.http.post(this.apiUrl, data, this.httpOptions).subscribe(
      (response) => {
        this.getUserDataEvent.next()
      },
      (error) => {
        console.error('Error al realizar la solicitud:', error);
      }
    );
  }

  getUserData() {
    return this.getUserDataEvent.asObservable();
  }
}
