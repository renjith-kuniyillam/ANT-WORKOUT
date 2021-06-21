import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    });


  }
 
  isRequiredFailed(fieldName: string): boolean {
    console.log('required', this.bookCourtForm.get(fieldName).errors);
    console.log('touched', this.bookCourtForm.get(fieldName).touched);
    return this.bookCourtForm.get(fieldName).errors?.required && this.bookCourtForm.get(fieldName).touched;
  }

  getErrorMessage(fieldName: string): string {
    let errorMessage: string;
    switch(fieldName) {
      case 'firstname' : 
        errorMessage = 'First Name is required';
        break;
      case 'lastname' : 
        errorMessage = 'Last Name is required';
        break;
    }
    return errorMessage;
  }

  submitForm() {
    console.log(this.bookCourtForm);
  }

}
