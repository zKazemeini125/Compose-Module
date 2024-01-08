import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographiComponent } from './biographi.component';

describe('BiographiComponent', () => {
  let component: BiographiComponent;
  let fixture: ComponentFixture<BiographiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiographiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiographiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
