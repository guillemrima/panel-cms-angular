import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { skip } from 'rxjs';
import { DataService } from 'src/app/services/user-service/data-service.service';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;
  isEditUser: boolean = false;
  userEditData: any;

  constructor(
    private fb: FormBuilder,
    private DataService: DataService,
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surnames: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
    this.DataService.getSelectedData().pipe((skip(1))).subscribe((selectedData) => {
      this.userEditData = selectedData
      this.form.patchValue(this.userEditData);
      this.isEditUser = true;
    });
  }

  onSubmit() {
    const userData = this.form.value;

    if (this.isEditUser) {
      const userId = this.userEditData.id
      this.DataService.updateUser(userId, userData);
      this._snackBar.open('¡Usuario actualizado correctamente!', 'Ok', { duration: 2000 })
      this.isEditUser = false
    } else {
      this.DataService.createUser({ userData });
      this._snackBar.open('¡Usuario creado correctamente!', 'Ok', { duration: 2000 });
    }

    this.form.reset();
  }

  resetForm(): void {
    this.form.reset();
  }
}
