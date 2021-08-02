import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timeValidator } from '../../shared/validators/time-check.validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookCourtForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookCourtForm  = this.fb.group({
      nameGroup: this.fb.group({
        firstname: this.fb.control('', [Validators.required]),
        lastname: this.fb.control('', [Validators.required]),
      }),
      selectedDate: this.fb.control(null, [Validators.required]),
      fromTime: this.fb.control(null, [Validators.required]),
      toTime: this.fb.control(null, [Validators.required]),
      peopleCount: this.fb.control('', [Validators.required])
    }, {validators: timeValidator('fromTime', 'toTime')});


  }
 
  isRequiredFailed(fieldName: string): boolean {
    return this.bookCourtForm.get(fieldName).errors?.required && this.bookCourtForm.get(fieldName).touched;
  }

  submitForm() {
    console.log(this.bookCourtForm);
  }

}

