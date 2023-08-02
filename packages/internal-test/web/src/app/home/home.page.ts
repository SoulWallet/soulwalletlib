import { Component, inject } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private navController: NavController;
  constructor(
    _navController: NavController
  ) {
    this.navController = _navController;
  }

  gotoPage(pageName: string) {
    this.navController.navigateForward(pageName);
  }

}
