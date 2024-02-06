import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopascoaComponent } from './autopascoa.component';

describe('AutopascoaComponent', () => {
  let component: AutopascoaComponent;
  let fixture: ComponentFixture<AutopascoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutopascoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutopascoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
