import { Component, OnInit, ContentChild } from '@angular/core';
import { CheckComponent } from './check/check.component';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  showMsg = false;

  @ContentChild(CheckComponent) check: CheckComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {
    if(this.check){
      this.check.checked.subscribe((value)=>{
        this.showMsg = value;
      });
    }
  }
}
