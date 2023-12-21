import { Component } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-f';

  constructor(private authService: AuthService) {}
  getUsername(): string | null {
    return this.authService.getUsername();
  }

  canAccessUsers(): boolean {
  return this.authService.isAdmin();
  }

  canAccessItems(): boolean {
  return this.authService.isAuthenticated();
  }


  logout() {
    this.authService.logout();
  }
}
