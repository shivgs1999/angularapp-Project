import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selectedValue: string;
  constructor() { }

  ngOnInit() {
  }

  getSelectedValue(value) {
    console.log(value.target.value);
    this.selectedValue = value.target.value;
  }
}
