import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabpanePage } from './tabpane-page';

describe('TabpanePage', () => {
  let component: TabpanePage;
  let fixture: ComponentFixture<TabpanePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabpanePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabpanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
