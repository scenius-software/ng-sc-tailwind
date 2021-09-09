import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTwSuccessToastComponent } from './sc-tw-success-toast.component';

describe('ScTwSuccessToastComponent', () => {
  let component: ScTwSuccessToastComponent;
  let fixture: ComponentFixture<ScTwSuccessToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScTwSuccessToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTwSuccessToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
