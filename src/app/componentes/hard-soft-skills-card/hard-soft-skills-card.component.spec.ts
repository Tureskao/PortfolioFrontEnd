import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoftSkillsCardComponent } from './hard-soft-skills-card.component';

describe('HardSoftSkillsCardComponent', () => {
  let component: HardSoftSkillsCardComponent;
  let fixture: ComponentFixture<HardSoftSkillsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSoftSkillsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSoftSkillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
