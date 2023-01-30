import { TestBed } from '@angular/core/testing';

import { NoticacaoService } from './noticacao.service';

describe('NoticacaoService', () => {
  let service: NoticacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
