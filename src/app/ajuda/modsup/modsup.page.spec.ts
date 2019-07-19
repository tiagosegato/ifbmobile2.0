import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsupPage } from './modsup.page';

describe('ModsupPage', () => {
  let component: ModsupPage;
  let fixture: ComponentFixture<ModsupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModsupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
