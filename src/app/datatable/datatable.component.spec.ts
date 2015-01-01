import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablePageComponent } from './datatable.component';

describe('DatatableComponent', () => {
  let component: DatatablePageComponent;
  let fixture: ComponentFixture<DatatablePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatatablePageComponent]
    });
    fixture = TestBed.createComponent(DatatablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
