import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/general.service';
import Child from 'src/models/child';
import User from 'src/models/user';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  personalForm: any;


 addChild() {
  let idControl = this.personalForm.get('id');
  (this.personalForm.get('children') as FormArray).push(this.fb.group({
    childName:[''],
    childDateBorn: [],
    childId: [],
    parentId: idControl
  }));
  }
  
 onSubmit() {
  if(this.personalForm.invalid)
     return;
  this.generalService.addUser(this.personalForm.value as User).subscribe(res=>{
          alert('res')
  });
  let children = this.personalForm.get('children').value;
  children.forEach(child => {
    this.generalService.addChild(child as Child).subscribe(res=>{
      alert('res')
});
  }); 
}
  constructor(public fb: FormBuilder, public generalService: GeneralService){

  }



  ngOnInit(): void {
    this.personalForm = this.generalService.personalFormBasic;
    this.addChild();
  }

}
