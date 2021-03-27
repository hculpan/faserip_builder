import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttribsComponent } from './edit-attribs.component';

describe('EditAttribsComponent', () => {
  let component: EditAttribsComponent;
  let fixture: ComponentFixture<EditAttribsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAttribsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttribsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
