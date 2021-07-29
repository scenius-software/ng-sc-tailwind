import { TestBed } from '@angular/core/testing';

import { ScTailwindService } from './sc-tailwind.service';

describe('ScTailwindService', () => {
  let service: ScTailwindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScTailwindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
