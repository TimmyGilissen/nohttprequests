import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PublisherService } from './publisher.service';

describe('Publisher Service', () => {
  beforeEachProviders(() => [PublisherService]);

  it('should ...',
      inject([PublisherService], (service: PublisherService) => {
    expect(service).toBeTruthy();
  }));
});
