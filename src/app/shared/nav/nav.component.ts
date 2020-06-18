import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  clickMessage = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 


 logOut() {
  console.log("clicked");
  this.router.navigate(['/auth/login']);
 }
}
