import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTwDangerToastComponent } from './sc-tw-danger-toast.component';

describe('ScTwDangerToastComponent', () => {
  let component: ScTwDangerToastComponent;
  let fixture: ComponentFixture<ScTwDangerToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScTwDangerToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTwDangerToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
