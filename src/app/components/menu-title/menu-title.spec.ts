import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTitle } from './menu-title';

describe('MenuTitle', () => {
  let component: MenuTitle;
  let fixture: ComponentFixture<MenuTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
