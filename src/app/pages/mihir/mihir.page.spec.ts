import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MihirPage } from './mihir.page';

describe('MihirPage', () => {
  let component: MihirPage;
  let fixture: ComponentFixture<MihirPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MihirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
