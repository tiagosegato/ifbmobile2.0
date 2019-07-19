import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPage } from './tipos.page';

describe('TiposPage', () => {
  let component: TiposPage;
  let fixture: ComponentFixture<TiposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
