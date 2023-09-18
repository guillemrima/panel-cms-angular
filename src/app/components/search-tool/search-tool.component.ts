import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrls: ['./search-tool.component.scss']
})
export class SearchToolComponent {

  @Output() sendFilterData = new EventEmitter<any>();

  form: FormGroup;
  filterData: any;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      data: [''],
      category: ['name', Validators.required]
    })
  }

  getfilterData(): void {
    this.filterData = this.form.value;

    this.sendFilterData.emit(this.filterData)
  }
}
