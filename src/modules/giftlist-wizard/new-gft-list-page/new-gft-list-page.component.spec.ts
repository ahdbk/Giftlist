import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGftListPageComponent } from './new-gft-list-page.component';

describe('NewGftListPageComponent', () => {
  let component: NewGftListPageComponent;
  let fixture: ComponentFixture<NewGftListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewGftListPageComponent]
    });
    fixture = TestBed.createComponent(NewGftListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
