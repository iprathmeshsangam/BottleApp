import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsStatusComponent } from './rooms-status.component';

describe('RoomsStatusComponent', () => {
  let component: RoomsStatusComponent;
  let fixture: ComponentFixture<RoomsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
