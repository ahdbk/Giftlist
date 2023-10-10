import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteHeaderComponent } from './website-header.component';

describe('HeaderComponent', () => {
  let component: WebsiteHeaderComponent;
  let fixture: ComponentFixture<WebsiteHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WebsiteHeaderComponent]
    });
    fixture = TestBed.createComponent(WebsiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
