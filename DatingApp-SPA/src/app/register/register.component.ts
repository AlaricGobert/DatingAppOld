import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Console } from '@angular/core/src/console';
import { AuthService } from '../_services/auth.service';
import { SyncfusionService } from '../_services/syncfusion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private syncfusion: SyncfusionService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.syncfusion.succes('registration successfull');
    }, error => {
      this.syncfusion.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
