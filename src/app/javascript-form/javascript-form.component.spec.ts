import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptFormComponent } from './javascript-form.component';

describe('JavascriptFormComponent', () => {
  let component: JavascriptFormComponent;
  let fixture: ComponentFixture<JavascriptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavascriptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
