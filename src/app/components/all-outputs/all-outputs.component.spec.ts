import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOutputsComponent } from './all-outputs.component';

describe('AllOutputsComponent', () => {
  let component: AllOutputsComponent;
  let fixture: ComponentFixture<AllOutputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOutputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
