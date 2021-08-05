import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarShowcaseComponent } from './sidebar-showcase.component';

describe('SidebarShowcaseComponent', () => {
  let component: SidebarShowcaseComponent;
  let fixture: ComponentFixture<SidebarShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
