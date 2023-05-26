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

  it('Debe de hacer post de planetas', (done: DoneFn) => {
    const expectedResponse = { success: true };
    const mockPlaneta = { id: "P-1G2J4V5M6J7J",
    nombre: "planet1",
    tipo: "raro",
    descripcion: "este es un planeta raro",
    estado: true,
    habilidad: "Habilidad 1",
    administradoresId: 1
  };
    // por que un subscribe en un metodo de post??
    planetaService.addPlaneta(mockPlaneta).subscribe(
      data => {
        expect(data).toContain(mockPlaneta)
        done();
      }
    );
    const req = httpTestingController.expectOne('http://localhost:5031/api/Planetas');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockPlaneta);
    req.flush(expectedResponse);
  });


  // it('Debe de hacer put de planetas', (done: DoneFn) => {
  //   const mockPlaneta = { id: "P-1G2J4V5M6J7J",
  //   nombre: "planet1",
  //   tipo: "raro",
  //   descripcion: "este es un planeta raro",
  //   estado: true,
  //   habilidad: "Habilidad 1",
  //   administradoresId: 1};

  //   planetaService.updatePlaneta(mockPlaneta.id).subscribe(
  //     {next: data => {
  //       expect(data).toContain(mockPlaneta)
  //       done();
  //     }}
  //   );
  //   done();
  // });

  it('Debe de hacer get de planetas', (done: DoneFn) => {
    const mockPlaneta = {
      id: "P-1G2J4V5M6J7J",
      nombre: "planet1",
      tipo: "raro",
      descripcion: "este es un planeta raro",
      estado: true,
      habilidad: "Habilidad 1",
      administradoresId: 1
    };

    planetaService.getPlaneta(mockPlaneta.id).subscribe(
      {next: data => {
        expect(data).toContain(mockPlaneta)
        done();
      }}
    );
    done();
  });



  // it('Deberia manejar los errores al recibir datos', () => {
  //   const Id = 'P-1G2J4V5M6J7J';
  //   const errorMessage = 'Error retrieving user details';

  //   planetaService.getPlaneta(Id).subscribe({
  //     error: error => {
  //       expect(error).toBe(errorMessage);
  //     }}
  //   );

  //   const req = httpTestingController.expectOne(`/api/users/${Id}`);
  //   req.error(new ErrorEvent('Network error', { message: errorMessage }));
  // });
});
