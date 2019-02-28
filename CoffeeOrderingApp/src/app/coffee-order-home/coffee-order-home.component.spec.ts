import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeOrderHomeComponent } from './coffee-order-home.component';

describe('CoffeeOrderHomeComponent', () => {
  let component: CoffeeOrderHomeComponent;
  let fixture: ComponentFixture<CoffeeOrderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeOrderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeOrderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
