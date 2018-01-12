import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectOnlineOfflineComponent } from './detect-online-offline.component';

describe('DetectOnlineOfflineComponent', () => {
  let component: DetectOnlineOfflineComponent;
  let fixture: ComponentFixture<DetectOnlineOfflineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectOnlineOfflineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectOnlineOfflineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
