import { Injectable } from '@angular/core';
import { DataSession } from '@models/interfaces/session.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username: string = '';
  private _usernameObs$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private _isLoggedObs$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  private _store(username: string): void {
    this.username = username;
  }

  getUsername(): Observable<string> {
    return this._usernameObs$.asObservable();
  }

  isUserLogged(): Observable<boolean> {
    return this._isLoggedObs$.asObservable();
  }

  isLoading(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }

  private _setDelay(): void {
    setTimeout(() => {
      this._isLoading$.next(false);
      this._usernameObs$.next(this.username);
    }, 2000)
  }

  login(username: string): void {
    this._store(username);
    this._isLoading$.next(true);
    this._isLoggedObs$.next(true);
    this._setDelay();
  }

  logout(): void {
    this._usernameObs$.next(null);
    this._isLoggedObs$.next(false);
  }
}
