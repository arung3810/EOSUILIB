import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianPage } from './accordian-page';

describe('AccordianPage', () => {
  let component: AccordianPage;
  let fixture: ComponentFixture<AccordianPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordianPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
