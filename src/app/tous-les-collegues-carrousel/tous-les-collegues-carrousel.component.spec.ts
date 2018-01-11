import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesColleguesCarrouselComponent } from './tous-les-collegues-carrousel.component';

describe('TousLesColleguesCarrouselComponent', () => {
  let component: TousLesColleguesCarrouselComponent;
  let fixture: ComponentFixture<TousLesColleguesCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousLesColleguesCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousLesColleguesCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
