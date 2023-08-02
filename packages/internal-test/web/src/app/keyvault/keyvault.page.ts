import { Component, OnInit } from '@angular/core';
import { ABFA } from '@soulwallet/keyvault';

@Component({
  selector: 'app-keyvault',
  templateUrl: './keyvault.page.html',
  styleUrls: ['./keyvault.page.scss'],
})
export class KeyvaultPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    {
      const _timeBefore = Date.now();
      const key = await ABFA.scrypt('password');
      const _timeAfter = Date.now();
      console.log(`Time to derive key: ${_timeAfter - _timeBefore}ms`);
      if (key.isErr()) {
        throw key.ERR;
      }
    }
    {
      const _timeBefore = Date.now();
      const key = await ABFA.argon2id('password');
      const _timeAfter = Date.now();
      console.log(`Time to derive key: ${_timeAfter - _timeBefore}ms`);
      console.log(key);
      debugger;
    }
  }

}
