import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainproductsComponent } from './mainproducts.component';

describe('MainproductsComponent', () => {
  let component: MainproductsComponent;
  let fixture: ComponentFixture<MainproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
