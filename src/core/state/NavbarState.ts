import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarState {
  showNavbar: boolean = true;

  setHideNavbar() {
    this.showNavbar = false;
  }

  setShowNavbar() {
    this.showNavbar = true;
  }
}