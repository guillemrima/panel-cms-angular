import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getUserDataEvent = new Subject<void>();

  private apiUrl = 'http://localhost:8080/users';

  private dataToEdit: any;
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private selectedDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  private imageModal = new BehaviorSubject<boolean>(false);
  buttonImageModalClicked$ = this.imageModal.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Otras cabeceras aquí, si es necesario
    }),
  };
  constructor(private http: HttpClient) { }

  createUser(data: any) {
    const userData = data.userData
    this.http.post(this.apiUrl, userData, this.httpOptions).subscribe(
      (response) => {
        this.getUserDataEvent.next()
      },
      (error) => {
        console.error('Error al realizar la solicitud:', error);
      }
    );
  }

  deleteUser(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      (response) => {
        this.getUserDataEvent.next()
      },
      (error) => {
        console.error('Error al realizar la solicitud:', error)
      }
    )
  }

  updateUser(userId: any, userData: any) {
    this.http.put(`${this.apiUrl}/${userId}`, userData, this.httpOptions).subscribe(
      (response) => {
        this.getUserDataEvent.next()
      },
      (error) => {
        console.error('Error al actualizar los datos del usuario:', error)
      }
    )
  }

  getUserData() {
    return this.getUserDataEvent.asObservable();
  }

  getDataToEdit() {
    return this.dataToEdit;
  }

  setSelectedData(id: number) {
    this.http.get(`${this.apiUrl}/${id}`).subscribe(
      (response) => {
        this.selectedDataSubject.next(response);
      },
      (error) => {
        console.log('Error al realizar la solicitud:', error)
      }
    )
  }

  getSelectedData(): Observable<any> {
    return this.selectedDataSubject.asObservable();
  }

  openImageModal() {
    this.imageModal.next(true);
  }
}
