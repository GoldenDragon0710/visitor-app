import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentVisitorPage } from './current-visitor.page';

describe('CurrentVisitorPage', () => {
  let component: CurrentVisitorPage;
  let fixture: ComponentFixture<CurrentVisitorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CurrentVisitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
