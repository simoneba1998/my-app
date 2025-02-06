import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetteMezzoComponent } from './sette-mezzo.component';

describe('SetteMezzoComponent', () => {
  let component: SetteMezzoComponent;
  let fixture: ComponentFixture<SetteMezzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetteMezzoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetteMezzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
