import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserSubject = new BehaviorSubject(null);
  // currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials) {
    this.http.post<{ data, msg, result }>(`${environment.apiUrl}user/login`, credentials).subscribe((res) => {
      if (res && res.data) {
        this.router.navigate(['/home']);
        this.currentUserSubject.next(res.data);
      }
    })
  }

  getUser() {
    return this.currentUserSubject;
  }
}
