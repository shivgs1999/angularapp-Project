import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform-assign',
  templateUrl: './reactiveform-assign.component.html',
  styleUrls: ['./reactiveform-assign.component.css']
})
export class ReactiveformAssignComponent implements OnInit {
  hide = true;
  myReactiveForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'fullName': new FormControl('', [Validators.required]),
      'birthDate': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'country': new FormControl(''),
      'phoneNumber': new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      'bio': new FormControl('', [Validators.maxLength(256)]),
      'userName': new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(25),Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'passWord': new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),]),
      'confirmPassword': new FormControl('', [Validators.required]),
      'termsChecked': new FormControl(false, Validators.requiredTrue)
    });
  }

  phoneNumberValidator(control: FormControl): { [key: string]: any } | null {
    const phoneNumber = control.value;

    // Define the validation logic for the phone number
    const phoneNumberRegex = /^[0-9]{10}$/; // Example: Accepts exactly 10 digits

    if (phoneNumber && !phoneNumberRegex.test(phoneNumber)) {
      return { invalidPhoneNumber: true };
    }

    return null;
  }


  onSubmit() {
    if (this.myReactiveForm.valid) {
      // Form is valid, perform form submission or other operations here
      console.log(this.myReactiveForm.value);
    } else {
      // Form is invalid, handle validation errors
      this.myReactiveForm.markAllAsTouched();
    }
  }
}
