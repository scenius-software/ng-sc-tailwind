import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTailwindComponent } from './sc-tailwind.component';

describe('ScTailwindComponent', () => {
  let component: ScTailwindComponent;
  let fixture: ComponentFixture<ScTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScTailwindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
