import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConectaPage } from './info-conecta.page';

describe('InfoConectaPage', () => {
  let component: InfoConectaPage;
  let fixture: ComponentFixture<InfoConectaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoConectaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoConectaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
