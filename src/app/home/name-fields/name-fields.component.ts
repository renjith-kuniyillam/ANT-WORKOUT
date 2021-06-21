import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-fields',
  templateUrl: './name-fields.component.html',
  styleUrls: ['./name-fields.component.css']
})
export class NameFieldsComponent implements OnInit {

  @Input() nameFormGroup: FormGroup;

  constructor() { }

  isRequiredFailed(fieldName: string): boolean {
    return this.nameFormGroup.get(fieldName).errors?.required && this.nameFormGroup.get(fieldName).touched;
  }

  ngOnInit(): void {
  }

}
