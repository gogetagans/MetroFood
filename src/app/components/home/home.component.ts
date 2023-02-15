
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTERPATH } from '@models/enums/router-path.enum';
import { LoginService } from '@services/loginService/login-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  isLoading = true;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.loginService.isUserLogged().subscribe((isLogged) => {
      if (!isLogged) {
        this.router.navigate(['/', ROUTERPATH.LOGIN]);
      }
    }));

    this.subscriptions.add(
      this.loginService.isLoading().subscribe(data => this.isLoading = data)
    )

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
