import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitOrganizerComponent } from './outfit-organizer.component';

describe('OutfitOrganizerComponent', () => {
  let component: OutfitOrganizerComponent;
  let fixture: ComponentFixture<OutfitOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutfitOrganizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
