import { TestBed } from '@angular/core/testing';

import { ScTailwindModalService } from './sc-tailwind-modal.service';

describe('ScTailwindModalService', () => {
  let service: ScTailwindModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScTailwindModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
