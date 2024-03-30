import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RushiPage } from './rushi.page';

describe('RushiPage', () => {
  let component: RushiPage;
  let fixture: ComponentFixture<RushiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RushiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
