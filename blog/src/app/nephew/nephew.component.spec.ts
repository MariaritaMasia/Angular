import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NephewComponent } from './nephew.component';

describe('NephewComponent', () => {
  let component: NephewComponent;
  let fixture: ComponentFixture<NephewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NephewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NephewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
