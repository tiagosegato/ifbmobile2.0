import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectaPage } from './conecta.page';

describe('ConectaPage', () => {
  let component: ConectaPage;
  let fixture: ComponentFixture<ConectaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConectaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
