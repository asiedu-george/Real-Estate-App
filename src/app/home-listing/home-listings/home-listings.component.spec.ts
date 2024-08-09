import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListingsComponent } from './home-listings.component';

describe('HomeListingsComponent', () => {
  let component: HomeListingsComponent;
  let fixture: ComponentFixture<HomeListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
