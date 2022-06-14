import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlayeroutComponent } from './mainlayerout.component';

describe('MainlayeroutComponent', () => {
  let component: MainlayeroutComponent;
  let fixture: ComponentFixture<MainlayeroutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainlayeroutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainlayeroutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
