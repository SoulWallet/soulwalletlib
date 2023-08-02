import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyvaultPage } from './keyvault.page';

describe('KeyvaultPage', () => {
  let component: KeyvaultPage;
  let fixture: ComponentFixture<KeyvaultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KeyvaultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
