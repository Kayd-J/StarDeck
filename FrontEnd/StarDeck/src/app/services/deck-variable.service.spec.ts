import { TestBed } from '@angular/core/testing';

import { DeckVariableService } from './deck-variable.service';

describe('DeckVariableService', () => {
  let service: DeckVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
