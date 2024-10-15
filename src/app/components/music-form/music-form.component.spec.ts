import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MusicFormComponent } from './music-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicService } from '../../services/music.service';
import { of } from 'rxjs';

describe('MusicFormComponent', () => {
  let component: MusicFormComponent;
  let fixture: ComponentFixture<MusicFormComponent>;
  let mockService: jasmine.SpyObj<MusicService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('MusicService', ['getMusicStyles']);
    mockService.getMusicStyles.and.returnValue(of([{ id: 1, name: 'Rock' }]));

    await TestBed.configureTestingModule({
      //declarations: [MusicFormComponent],
      imports: [
        MusicFormComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: MusicService, useValue: mockService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar estilos musicales', () => {
    expect(component.musicStyles.length).toBe(1);
    expect(component.musicStyles[0].name).toBe('Rock');
  });

  it('debería validar que el formulario sea inválido si está vacío', () => {
    expect(component.musicForm.valid).toBeFalse();
  });

  it('debería validar que el formulario sea válido si se ingresan datos correctos', () => {
    component.musicForm.controls['style'].setValue(1);
    component.musicForm.controls['email'].setValue('test@example.com');
    expect(component.musicForm.valid).toBeTrue();
  });
});
