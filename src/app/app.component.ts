import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor(private router: Router) {
    this.router.events.subscribe((data) => {
      // this.loading = true;
    })
  }

  onActivate(event) {
    console.log(event);
  }

  onDeactivate(event) {
    console.log(event);
  }
}
