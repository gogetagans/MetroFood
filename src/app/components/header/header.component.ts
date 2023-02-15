import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTERPATH } from '@models/enums/router-path.enum';
import { LoginService } from '@services/loginService/login-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit, OnDestroy {
  subcriptions = new Subscription();
  username = null;
  userLogged = false;
  constructor(private loginService: LoginService, private router: Router) { }

  onClickLogout(): void {
    this.loginService.logout();
    this.router.navigate([ROUTERPATH.LOGIN]);
  }
  ngOnInit(): void {
    this.subcriptions.add(this.loginService.isUserLogged().subscribe((userLogged) => {
      this.userLogged = userLogged;
      this.loginService.getUsername().subscribe((username) => {
        this.username = username;
      })
    }));
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }

}
