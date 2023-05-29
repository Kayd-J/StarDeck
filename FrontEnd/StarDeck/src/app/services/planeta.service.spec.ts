import { TestBed } from '@angular/core/testing';
import { PlanetaService } from './planeta.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('TEST del servicio "PlanetaService"', () => {
  let httpClientSpy: { post: jasmine.Spy };
  let planetaService: PlanetaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    planetaService = new PlanetaService(httpClientSpy as any);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlanetaService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    const mockPlaneta = { id: "P-1G2J4V5M6J7J",
    nombre: "planet1",
    tipo: "raro",
    descripcion: "este es un planeta raro",
    estado: true,
    habilidad: "Habilidad 1",
    administradoresId: 1};

    const planetaId = "P-1G2J4V5M6J7J";

    httpClientSpy.post.and.returnValue(of(mockPlaneta));
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Debe ser creado correctamente', () => {
    expect(planetaService).toBeTruthy();
  });

});
