import { TestBed } from '@angular/core/testing';

import { AnimeInfoService } from './anime-info.service';

describe('AnimeInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeInfoService = TestBed.get(AnimeInfoService);
    expect(service).toBeTruthy();
  });
});
