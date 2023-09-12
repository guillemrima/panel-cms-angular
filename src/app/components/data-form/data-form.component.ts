import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { skip } from 'rxjs';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private DataService: DataService
  ) {
    this.form = this.fb.group({
      id: [Number],
      name: ['', Validators.required],
      surnames: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  ngOnInit(): void {
    // this.DataService.formData$
    //   .pipe(skip(1))
    //   .subscribe(data => {
    //     this.editData(data);
    //   });
  }

  onSubmit() {
    const formData = this.form.value;
    this.DataService.createUser({ formData });
    this.form.reset();
  }

  editData(data: any) {
    this.form.patchValue(data);
  }

}
