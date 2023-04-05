import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingInputsComponent } from './heading-inputs.component';

describe('HeadingInputsComponent', () => {
  let component: HeadingInputsComponent;
  let fixture: ComponentFixture<HeadingInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
