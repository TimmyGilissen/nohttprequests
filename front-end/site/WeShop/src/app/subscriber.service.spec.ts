import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SubscriberService } from './subscriber.service';

describe('Subscriber Service', () => {
  beforeEachProviders(() => [SubscriberService]);

  it('should ...',
      inject([SubscriberService], (service: SubscriberService) => {
    expect(service).toBeTruthy();
  }));
});
