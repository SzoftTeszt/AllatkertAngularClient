import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjallatComponent } from './ujallat.component';

describe('UjallatComponent', () => {
  let component: UjallatComponent;
  let fixture: ComponentFixture<UjallatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjallatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjallatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
