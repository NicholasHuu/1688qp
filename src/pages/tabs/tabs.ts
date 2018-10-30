import { Component } from '@angular/core';

import { GamePage } from '../game/game';
import { CenterPage } from '../center/center';
import { HomePage } from '../home/home';
import { SharePage } from '../share/share';
import { DepositPage } from '../deposit/deposit';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SharePage;
  tab3Root = GamePage;
  tab4Root = DepositPage;
  tab5Root = CenterPage;
  constructor() {

  }
}
