import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucceedToAddComponent } from './succeed-to-add.component';

describe('SucceedToAddComponent', () => {
  let component: SucceedToAddComponent;
  let fixture: ComponentFixture<SucceedToAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucceedToAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucceedToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
