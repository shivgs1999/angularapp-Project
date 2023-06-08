import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passgenrator',
  templateUrl: './passgenrator.component.html',
  styleUrls: ['./passgenrator.component.css']
})
export class PassgenratorComponent implements OnInit {

  length = 0; 
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  constructor() { }

  ngOnInit() {
  }

  
  onChangeLenth(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      console.log(this.length)
    }
  }
  onChangeLetters()
  {
    this.includeLetters = !this.includeLetters;
  }
  onChangeNumbers() {
    this.includeNumbers = ! this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = ! this.includeSymbols
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = ''

    if(this.includeLetters) 
    {
      validChars += letters;
    }
    if(this.includeNumbers) {
      validChars += numbers;

    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
