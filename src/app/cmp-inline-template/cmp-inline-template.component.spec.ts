import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpInlineTemplateComponent } from './cmp-inline-template.component';

describe('CmpInlineTemplateComponent', () => {
  let component: CmpInlineTemplateComponent;
  let fixture: ComponentFixture<CmpInlineTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpInlineTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpInlineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
