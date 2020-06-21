import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from 'src/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserSubject = new BehaviorSubject(null);
  currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router, private store: Store) { }

  login(credentials) {
    this.http.post<{ data, msg, result }>(`${environment.apiUrl}user/login`, credentials).subscribe((res) => {
      if (res && res.data) {
        localStorage.setItem('token', res.data.token);
        this.router.navigate(['/home']);
        // this.currentUserSubject.next(res.data);
        this.store.set('user', res.data);
        this.store.set('notifications', {
          n1: 'opopopop',
          n2: 'klklklklkl'
        });
      }
    })
  }

  userData() {
    return this.currentUser;
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
