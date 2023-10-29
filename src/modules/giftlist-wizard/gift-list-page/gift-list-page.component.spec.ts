import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftListPageComponent } from './gift-list-page.component';

describe('GiftListPageComponent', () => {
  let component: GiftListPageComponent;
  let fixture: ComponentFixture<GiftListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftListPageComponent]
    });
    fixture = TestBed.createComponent(GiftListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
