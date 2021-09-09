import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTwWarningToastComponent } from './sc-tw-warning-toast.component';

describe('ScTwWarningToastComponent', () => {
  let component: ScTwWarningToastComponent;
  let fixture: ComponentFixture<ScTwWarningToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScTwWarningToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTwWarningToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
