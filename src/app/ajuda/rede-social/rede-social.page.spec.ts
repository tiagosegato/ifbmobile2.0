import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeSocialPage } from './rede-social.page';

describe('RedeSocialPage', () => {
  let component: RedeSocialPage;
  let fixture: ComponentFixture<RedeSocialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeSocialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
