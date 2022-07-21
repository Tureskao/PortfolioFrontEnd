import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceEducationCardComponent } from './experience-education-card.component';

describe('ExperienceEducationCardComponent', () => {
  let component: ExperienceEducationCardComponent;
  let fixture: ComponentFixture<ExperienceEducationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceEducationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceEducationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
