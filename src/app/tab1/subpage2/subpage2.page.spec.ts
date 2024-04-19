import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subpage2Page } from './subpage2.page';

describe('Subpage2Page', () => {
  let component: Subpage2Page;
  let fixture: ComponentFixture<Subpage2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Subpage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
