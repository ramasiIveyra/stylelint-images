

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authState:any = {
    isAuthenticated : false
  }

  constructor() {}

  public setAuthState(state:any){
    this.authState={...this.authState,...state};
  }
}
