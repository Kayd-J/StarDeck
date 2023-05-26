import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: { post: jasmine.Spy };
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    service = new ApiService(httpClientSpy as any);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiService);

    httpClientSpy.post.and.returnValue(of(Response));
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Debe ser creado correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Debe hacer login correctamente', () => {
    expect(service.loginByEmailCliente).toBeTruthy();
  }
  );

  it('Debe agregar un jugador', () => {
    expect(service.addJugador).toBeTruthy();
  }
  );

  it('Debe traer info de todos los jugadores', () => {
    expect(service.getJugadores).toBeTruthy();
  }
  );

  it('Debe retornar info de un jugador especifico', () => {
    expect(service.getJugador).toBeTruthy();
  }
  );

  it('Debe agregar un planeta', () => {
    expect(service.addPlaneta).toBeTruthy();
  }

  );

  // it('Debe retornar todos los planetas', () => {
  //   expect(service.getPlanetas).toBeTruthy();
  // }
  // );

  // it('Debe retornar un observable', () => {
  //   expect(service.getPlaneta).toBeTruthy();
  // }
  // );

  // it('Debe retornar un observable', () => {
  //   expect(service.updateCarta).toBeTruthy();
  // }
  // );

  // it('Debe retornar un observable', () => {
  //   expect(service.deleteCarta).toBeTruthy();
  // }
  // );

  it('Debe retornar info de todas las cartas', () => {
    expect(service.getCartas).toBeTruthy();
  }
  );

  // it('Debe retornar un observable', () => {
  //   expect(service.getCarta).toBeTruthy();
  // }
  // );

});
