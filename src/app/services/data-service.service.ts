import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  sendFormData(data: any) {
    this.dataSubject.next(data);
  }
}
