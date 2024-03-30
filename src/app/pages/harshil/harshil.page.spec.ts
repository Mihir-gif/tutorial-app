import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarshilPage } from './harshil.page';

describe('HarshilPage', () => {
  let component: HarshilPage;
  let fixture: ComponentFixture<HarshilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HarshilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
