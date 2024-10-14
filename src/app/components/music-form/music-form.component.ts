import { Component, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'; // Para formularios reactivos

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusicService } from '../../services/music.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrl: './music-form.component.css',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class MusicFormComponent implements OnInit {
  musicForm!: FormGroup;
  musicStyles: any[] = [];
  musicStylesSummary: any[] = []

  constructor(
    private fb: FormBuilder,
    private musicService: MusicService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.musicForm = this.fb.group({
      style: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.musicService.getMusicStyles().subscribe((styles) => {
      this.musicStyles = styles;
    });
  }

  onSubmit() {
    if (this.musicForm.invalid) {
      this.snackBar.open('Por favor, corrige los errores.', 'Cerrar', { duration: 3000 });
      return;
    }

    const { style, email } = this.musicForm.value;
    this.musicService.submitMusicChoice(style, email).subscribe(
      (response) => {
        if (response.statusCode === 0) {
          this.snackBar.open('Ingreso exitoso!', 'Cerrar', { duration: 3000 });
          this.router.navigate(['/music-stats']);
        } else {
          this.snackBar.open(response.message ?? '', 'Cerrar', { duration: 3000 });
        }
      },
      (error) => {
        this.snackBar.open('Error en el servicio.', 'Cerrar', { duration: 3000 });
      }
    );
  }
}
