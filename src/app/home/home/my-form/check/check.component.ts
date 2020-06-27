import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {


  isChecked = false;

  @Output() checked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  _checked(){
    debugger;
    this.checked.emit(this.isChecked);
  }

}
