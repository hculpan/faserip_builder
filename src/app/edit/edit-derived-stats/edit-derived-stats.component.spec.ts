import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDerivedStatsComponent } from './edit-derived-stats.component';

describe('EditDerivedStatsComponent', () => {
  let component: EditDerivedStatsComponent;
  let fixture: ComponentFixture<EditDerivedStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDerivedStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDerivedStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
