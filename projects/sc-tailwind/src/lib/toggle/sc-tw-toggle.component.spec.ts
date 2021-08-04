import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTwToggleComponent } from './sc-tw-toggle.component';

describe('ScTwToggleComponent', () => {
  let component: ScTwToggleComponent;
  let fixture: ComponentFixture<ScTwToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScTwToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTwToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
