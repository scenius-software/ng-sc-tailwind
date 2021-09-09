import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTwToastContainerComponent } from './sc-tw-toast-container.component';

describe('ScTwToastContainerComponent', () => {
  let component: ScTwToastContainerComponent;
  let fixture: ComponentFixture<ScTwToastContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScTwToastContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTwToastContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
