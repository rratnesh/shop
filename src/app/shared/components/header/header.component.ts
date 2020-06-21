import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store } from 'src/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user;

  constructor(private authService: AuthService, private store: Store) { }

  ngOnInit(): void {
    // this.authService.userData().subscribe((user) => {
    //   console.log(this.user);
    //   this.user = user;
    // })

    this.store.select('notifications').subscribe((user)=>{
      console.log(user);
    });
  }

  logout(){
    this.authService.logout();
  }

}
