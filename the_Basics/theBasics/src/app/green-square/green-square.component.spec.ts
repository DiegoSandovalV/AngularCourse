import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSquareComponent } from './green-square.component';

describe('GreenSquareComponent', () => {
  let component: GreenSquareComponent;
  let fixture: ComponentFixture<GreenSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenSquareComponent]
    });
    fixture = TestBed.createComponent(GreenSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
