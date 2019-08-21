import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGlossarioPage } from './details-glossario.page';

describe('DetailsGlossarioPage', () => {
  let component: DetailsGlossarioPage;
  let fixture: ComponentFixture<DetailsGlossarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsGlossarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGlossarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
