import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //declarations: [NavbarComponent],
      imports: [NavbarComponent, RouterModule.forRoot([])], // Proveer rutas en las pruebas
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1 }) }, // Simula la ruta
        },
      ],
    }).compileComponents();
  });

  it('debería crear el componente Navbar', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
