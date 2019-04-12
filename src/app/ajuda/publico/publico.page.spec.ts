import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicoPage } from './publico.page';

describe('PublicoPage', () => {
  let component: PublicoPage;
  let fixture: ComponentFixture<PublicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
