import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TasksServiceService } from './tasks-service.service';

describe('TasksService Service', () => {
  beforeEachProviders(() => [TasksServiceService]);

  it('should ...',
      inject([TasksServiceService], (service: TasksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
