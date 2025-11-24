import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabpane } from './tabpane';

describe('Tabpane', () => {
  let component: Tabpane;
  let fixture: ComponentFixture<Tabpane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabpane]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabpane);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
