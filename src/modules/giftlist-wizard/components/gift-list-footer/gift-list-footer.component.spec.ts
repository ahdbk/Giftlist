import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftListFooterComponent } from './gift-list-footer.component';

describe('GiftListfooterComponent', () => {
  let component: GiftListFooterComponent;
  let fixture: ComponentFixture<GiftListFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftListFooterComponent]
    });
    fixture = TestBed.createComponent(GiftListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
