import { Component, OnInit } from '@angular/core';
import { ABFA, Err, Result } from '@soulwallet/keyvault';

@Component({
  selector: 'app-scrypt-benchmark',
  templateUrl: './scrypt-benchmark.page.html',
  styleUrls: ['./scrypt-benchmark.page.scss'],
})
export class ScryptBenchmarkPage implements OnInit {

  protected disabled: boolean = false;

  protected result: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  async start() {
    this.disabled = true;
    try {
      this.result = [];
      for (let N = 8; N < 20; N++) {
        const ret = await this.scryptBenchmark(N);
        this.result.push(`N=2^${N}, ${ret} seconds`);
      }

    } catch (error) {
      alert('error');
      console.error(error);
    } finally {
      this.disabled = false;
    }
  }

  async scryptBenchmark(N: number): Promise<number> {
    const times = 5;
    const ts = new Date().getTime();
    for (let index = 0; index < times; index++) {
      const ret = await ABFA.scrypt("password", "salt", Math.pow(2, N));
      if (ret.isErr()) {
        throw ret.ERR;
      }
    }
    const te = new Date().getTime();
    return (te - ts) / times / 1000;
  }



}
