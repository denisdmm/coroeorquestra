import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultoDetailComponent } from './culto-detail.component';

describe('CultoDetailComponent', () => {
  let component: CultoDetailComponent;
  let fixture: ComponentFixture<CultoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
