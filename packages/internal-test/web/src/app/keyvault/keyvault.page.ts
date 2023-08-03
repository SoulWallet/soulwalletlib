import { Component, OnInit } from '@angular/core';
import { Vault, VaultEvents, SignData, Ok, Err, Result } from '@soulwallet/keyvault';
import { SoulWallet } from '@soulwallet/sdk';
@Component({
  selector: 'app-keyvault',
  templateUrl: './keyvault.page.html',
  styleUrls: ['./keyvault.page.scss'],
})
export class KeyvaultPage implements OnInit {

  constructor() {


  }

  async ngOnInit() {

  }

  async onClick() {
    debugger;
    //await new SoulWallet('', '', '', '', '', '')
    const _v = new Vault();
    // console.log('Vault created');
  }

}
