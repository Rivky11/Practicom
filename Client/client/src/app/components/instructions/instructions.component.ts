import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
form:FormGroup

  ngOnInit(){
    this.form = this.generalService.personalFormBasic;
  }
  constructor(public generalService: GeneralService){}
}
