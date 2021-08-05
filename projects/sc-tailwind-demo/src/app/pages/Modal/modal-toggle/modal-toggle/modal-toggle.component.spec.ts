import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalToggleComponent } from './modal-toggle.component';

describe('ModalToggleComponent', () => {
  let component: ModalToggleComponent;
  let fixture: ComponentFixture<ModalToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
