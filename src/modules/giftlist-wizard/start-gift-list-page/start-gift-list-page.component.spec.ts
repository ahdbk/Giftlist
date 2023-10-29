import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartGiftListPageComponent } from './start-gift-list-page.component';

describe('NewGftListPageComponent', () => {
  let component: StartGiftListPageComponent;
  let fixture: ComponentFixture<StartGiftListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartGiftListPageComponent]
    });
    fixture = TestBed.createComponent(StartGiftListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
