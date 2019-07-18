import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacaoPage } from './certificacao.page';

describe('CertificacaoPage', () => {
  let component: CertificacaoPage;
  let fixture: ComponentFixture<CertificacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
