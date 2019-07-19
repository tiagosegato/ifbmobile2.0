import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModtecPage } from './modtec.page';

describe('ModtecPage', () => {
  let component: ModtecPage;
  let fixture: ComponentFixture<ModtecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModtecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModtecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
