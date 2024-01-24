import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAppPage } from './home-app.page';

describe('HomeAppPage', () => {
  let component: HomeAppPage;
  let fixture: ComponentFixture<HomeAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
