import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticketComponent } from './verticket.component';

describe('VerticketComponent', () => {
  let component: VerticketComponent;
  let fixture: ComponentFixture<VerticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
