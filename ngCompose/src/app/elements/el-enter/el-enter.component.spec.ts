import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElEnterComponent } from './el-enter.component';

describe('ElEnterComponent', () => {
  let component: ElEnterComponent;
  let fixture: ComponentFixture<ElEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElEnterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
