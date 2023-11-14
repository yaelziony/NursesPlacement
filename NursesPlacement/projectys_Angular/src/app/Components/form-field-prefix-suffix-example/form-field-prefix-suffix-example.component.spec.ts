import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldPrefixSuffixExampleComponent } from './form-field-prefix-suffix-example.component';

describe('FormFieldPrefixSuffixExampleComponent', () => {
  let component: FormFieldPrefixSuffixExampleComponent;
  let fixture: ComponentFixture<FormFieldPrefixSuffixExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldPrefixSuffixExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldPrefixSuffixExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
