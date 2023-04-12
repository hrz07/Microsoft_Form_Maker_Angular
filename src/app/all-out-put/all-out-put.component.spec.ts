import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOutPutComponent } from './all-out-put.component';

describe('AllOutPutComponent', () => {
  let component: AllOutPutComponent;
  let fixture: ComponentFixture<AllOutPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOutPutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOutPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
