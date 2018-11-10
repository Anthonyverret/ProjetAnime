import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAnimeComponent } from './fiche-anime.component';

describe('FicheAnimeComponent', () => {
  let component: FicheAnimeComponent;
  let fixture: ComponentFixture<FicheAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheAnimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
