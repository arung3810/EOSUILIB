import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldPage } from './formfield-page';

describe('FormfieldPage', () => {
  let component: FormfieldPage;
  let fixture: ComponentFixture<FormfieldPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormfieldPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
