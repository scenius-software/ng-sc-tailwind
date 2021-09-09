import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTwDefaultToastComponent } from './sc-tw-default-toast.component';

describe('ScTwDefaultToastComponent', () => {
  let component: ScTwDefaultToastComponent;
  let fixture: ComponentFixture<ScTwDefaultToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScTwDefaultToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTwDefaultToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
