import { TestBed } from '@angular/core/testing';
import { MusicService } from './music.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MusicService', () => {
  let service: MusicService;
  let httpMock: HttpTestingController;
  const urlService = 'http://localhost:8085/musical-styles-survey/api/v1/allMusicStyles';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Módulo para mockear HTTP requests
      providers: [MusicService],
    });

    service = TestBed.inject(MusicService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya peticiones pendientes
  });

  it('debería crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería devolver estilos musicales simulados', (done) => {
    const mockData = [
      { id: 1, name: 'Rock' },
      { id: 2, name: 'Pop' },
    ];

    service.getMusicStyles().subscribe((data) => {
      expect(data).toEqual(mockData);
      done(); // Marca el test como completado
    });

    const req = httpMock.expectOne(urlService);
    expect(req.request.method).toBe('GET');
    req.flush(mockData); // Simula la respuesta del servidor
  });
});
