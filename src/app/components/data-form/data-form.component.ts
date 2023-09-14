import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { skip } from 'rxjs';
import { DataService } from 'src/app/services/data-service.service';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;

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
    this.DataService.getSelectedData().subscribe((selectedData) => {
      console.log(selectedData)
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.DataService.createUser({ formData });
    this._snackBar.open('¡Usuario creado correctamente!', 'Ok', { duration: 2000 });
    this.form.reset();
  }
}
