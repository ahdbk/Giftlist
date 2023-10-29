import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftListHeaderComponent } from './gift-list-header.component';

describe('GiftListHeaderComponent', () => {
  let component: GiftListHeaderComponent;
  let fixture: ComponentFixture<GiftListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftListHeaderComponent]
    });
    fixture = TestBed.createComponent(GiftListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
