import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { SyncfusionService } from '../_services/syncfusion.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private syncfusion: SyncfusionService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => this.syncfusion.succes(this.model),
      error => this.syncfusion.error(error)
    );
  }

  loggedin() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.syncfusion.information('logged out');
  }

}
