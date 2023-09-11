import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formDataSubject = new BehaviorSubject<any>(null);
  private listDataSubject = new BehaviorSubject<any>(null);

  public formData$ = this.formDataSubject.asObservable();
  public listData$ = this.listDataSubject.asObservable();

  sendFormData(data: any) {
    this.formDataSubject.next(data);
  }
  sendListData(data: any) {
    this.listDataSubject.next(data);
  }

}
