import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent {

  //Una forma más sencilla y básica de hacer un formulario con Angular

  // name: FormControl = new FormControl('', Validators.required);
  // surnames: FormControl = new FormControl('', Validators.required);
  // email: FormControl = new FormControl('', [Validators.email, Validators.required]);
  // password: FormControl = new FormControl('', Validators.required);
  // passwordConfirm: FormControl = new FormControl('', Validators.required);

  //Una forma más avanzada de hacer un formulario con Angular

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surnames: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

}
