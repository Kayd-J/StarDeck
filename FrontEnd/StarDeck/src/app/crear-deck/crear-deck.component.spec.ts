import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { HttpClientTestingModule } from '@angular/common/http/testing';
=======
import { HttpClientTestingModule} from '@angular/common/http/testing';
>>>>>>> ComponentTesting
import { CrearDeckComponent } from './crear-deck.component';

describe('(5) TEST del componente "CrearDeckComponent"', () => {
  let component: CrearDeckComponent;
  let fixture: ComponentFixture<CrearDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports:[HttpClientTestingModule],
=======
      imports: [
        HttpClientTestingModule
      ],
>>>>>>> ComponentTesting
      declarations: [ CrearDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de existir el CrearDeckComponent', () => {
    const fixture = TestBed.createComponent(CrearDeckComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe retornar Deck Inalido', () => {
    const fixture = TestBed.createComponent(CrearDeckComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.deckForm;
    const id = app.deckForm.controls['id'];
    id.setValue('testUnitarioIdDeck')
    expect(form.invalid).toBeTrue();
  });

  it('Debe retornar Deck Valido', () => {
    const fixture = TestBed.createComponent(CrearDeckComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.deckForm;
    const nombre = app.deckForm.controls['nombre'];
    nombre.setValue('testUnitarioNombreDeck')
    expect(form.valid).toBeTrue();
  });
});
