import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpInlineStyleComponent } from './cmp-inline-style.component';

describe('CmpInlineStyleComponent', () => {
  let component: CmpInlineStyleComponent;
  let fixture: ComponentFixture<CmpInlineStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpInlineStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpInlineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
