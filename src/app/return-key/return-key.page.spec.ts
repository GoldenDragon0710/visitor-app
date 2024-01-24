import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReturnKeyPage } from './return-key.page';

describe('ReturnKeyPage', () => {
  let component: ReturnKeyPage;
  let fixture: ComponentFixture<ReturnKeyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReturnKeyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
