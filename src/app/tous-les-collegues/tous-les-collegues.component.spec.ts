import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesColleguesComponent } from './tous-les-collegues.component';

describe('TousLesColleguesComponent', () => {
  let component: TousLesColleguesComponent;
  let fixture: ComponentFixture<TousLesColleguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousLesColleguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousLesColleguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
