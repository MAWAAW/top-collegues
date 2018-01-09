import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UneOpinionComponent } from './une-opinion.component';

describe('UneOpinionComponent', () => {
  let component: UneOpinionComponent;
  let fixture: ComponentFixture<UneOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UneOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UneOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
