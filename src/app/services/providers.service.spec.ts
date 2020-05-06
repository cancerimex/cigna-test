import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProvidersService } from './providers.service';

describe('ProvidersService', () => {
  let service: ProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(ProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
