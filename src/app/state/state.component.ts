import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class  StateComponent implements OnInit {
  // statess:any='';
  state: any = [];
  states: any = [];

  division: any = [];
  divisions: any = [];

  district: any = [];
  districts: any = [];

  taluka: any = [];
  talukas: any = [];

  village: any = [];
  villages: any = [];
  formData: any = [];
  newArr: any = [];
  serviceList: any = [];
  createFomyreactiveformrm: any;
  selectedRowIndex: number;

  isEditMode: boolean = false;


  constructor(private service: StateService) {
    this.createForm();
  }
  ngOnInit() {
    this.service.getState().subscribe((res) => {
      this.state = res;

      this.states = this.state.responseData;
      this.getList()

    });

  }


  myreactiveform!: FormGroup;

  createForm(): void {
    this.myreactiveform = new FormGroup({
      state: new FormControl('Maharashtra'),
      division: new FormControl(null),
      district: new FormControl(null),
      taluka: new FormControl(null),
      village: new FormControl(null),
    });
  }

  getList() {
    this.service.list().subscribe((res)=>{
      this.serviceList = res;
      console.log('', this.serviceList);
    });
  }

  stateMethod(id: any) {
    console.log(id);
    this.service.getDivision(id).subscribe((res) => {
      this.division = res;
      this.divisions = this.division.responseData;
    });
  }

  divisionMethod(id: any) {
    this.service.getdistrict(id).subscribe((res) => {
      this.district = res;
      this.districts = this.district.responseData;
    });
  }

  districtMethod(id: any) {
    this.service.getTaluka(id).subscribe((res) => {
      this.taluka = res;
      this.talukas = this.taluka.responseData;
    });
  }
  talukhaMethod(id: any) {
    this.service.getVillage(id).subscribe((res) => {
      this.village = res;
      this.villages = this.village.responseData;
    });
  }

 submitData(data: any) {
  if (this.isEditMode) {
    this.newArr[this.selectedRowIndex] = data;
    this.isEditMode = false;
  } else {
    this.formData.push(data);
    this.newArr = [...this.formData]; // Update newArr with a new reference to trigger change detection
  }
}

  

  resetData() {
    this.myreactiveform.reset();
  }
  

  onEdit(item: any, index: number) {
    this.isEditMode = true;
    this.selectedRowIndex = index;
    this.myreactiveform.patchValue({
      state: item.state,
      division: item.division,
      district: item.district,
      taluka: item.taluka,
      village: item.village
    });
  }
  

  onDelete(item: any) {
    const index = this.newArr.findIndex((data: any) => {
      // Customize the condition based on your requirements
      return data.state === item.state &&
             data.division === item.division &&
             data.district === item.district &&
             data.taluka === item.taluka &&
             data.village === item.village;
    });
  
    if (index > -1) {
      this.newArr.splice(index, 1);
    }
  }
}