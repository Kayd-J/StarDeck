import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CrearCartaComponent } from './crear-carta.component';

describe('CrearCartaComponent', () => {
  let component: CrearCartaComponent;
  let fixture: ComponentFixture<CrearCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CrearCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
