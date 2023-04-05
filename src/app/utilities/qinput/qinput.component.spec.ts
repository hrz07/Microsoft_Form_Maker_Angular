import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QinputComponent } from './qinput.component';

describe('QinputComponent', () => {
  let component: QinputComponent;
  let fixture: ComponentFixture<QinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
