import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTwModalBackdropComponent } from './sc-tw-modal-backdrop.component';

describe('ScTwModalBackdropComponent', () => {
  let component: ScTwModalBackdropComponent;
  let fixture: ComponentFixture<ScTwModalBackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScTwModalBackdropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTwModalBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
