import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EosUiComp } from './eos-ui-comp';

describe('EosUiComp', () => {
  let component: EosUiComp;
  let fixture: ComponentFixture<EosUiComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EosUiComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EosUiComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
