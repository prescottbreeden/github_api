import { TestBed, inject } from '@angular/core/testing';

import { GitFollowersService } from './git-followers.service';

describe('GitFollowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitFollowersService]
    });
  });

  it('should be created', inject([GitFollowersService], (service: GitFollowersService) => {
    expect(service).toBeTruthy();
  }));
});
