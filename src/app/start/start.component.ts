import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  public username: string = '';
  public password: string = '';
  public error: string = '';
  constructor(private authService: AuthService) {}

  loginSubmit() {
    this.authService
      .login(this.username, this.password)
      .subscribe(response => {
        if (response && response.token) {
          this.error = '';
          this.username = '';
          this.password = '';
        } else {
          this.error = 'Niepoprawne dane logowania!';
        }
      })
    ;
  }
  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}
