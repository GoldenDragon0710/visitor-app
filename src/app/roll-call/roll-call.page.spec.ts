import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RollCallPage } from './roll-call.page';

describe('RollCallPage', () => {
  let component: RollCallPage;
  let fixture: ComponentFixture<RollCallPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RollCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
