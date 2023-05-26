import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatchmakingComponent } from './matchmaking.component';

describe('MatchmakingComponent', () => {
  let component: MatchmakingComponent;
  let fixture: ComponentFixture<MatchmakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ MatchmakingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchmakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
