import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ShoppingListService } from './shopping-list-service';

describe('ShoppingListService Service', () => {
  beforeEachProviders(() => [ShoppingListService]);
});
