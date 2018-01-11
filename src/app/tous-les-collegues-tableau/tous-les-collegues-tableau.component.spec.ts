import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesColleguesTableauComponent } from './tous-les-collegues-tableau.component';

describe('TousLesColleguesTableauComponent', () => {
  let component: TousLesColleguesTableauComponent;
  let fixture: ComponentFixture<TousLesColleguesTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousLesColleguesTableauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousLesColleguesTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
