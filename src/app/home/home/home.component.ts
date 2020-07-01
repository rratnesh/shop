import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { CheckComponent } from './my-form/check/check.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from './my-modal/my-modal.component';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { fade, slide } from 'src/app/animations/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fade,
    slide
  ]
})


export class HomeComponent implements OnInit {

  showIt = false;

  @ContentChild('app-check') check;

  type = 'AG';
  showMsg = false;

  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
  }

  ShowModal() {
    this.modalService.open(MyModalComponent);
  }
}
