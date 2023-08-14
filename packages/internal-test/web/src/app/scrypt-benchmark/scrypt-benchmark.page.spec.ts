import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScryptBenchmarkPage } from './scrypt-benchmark.page';

describe('ScryptBenchmarkPage', () => {
  let component: ScryptBenchmarkPage;
  let fixture: ComponentFixture<ScryptBenchmarkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScryptBenchmarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
