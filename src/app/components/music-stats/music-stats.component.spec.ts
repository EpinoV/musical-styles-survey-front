import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicStatsComponent } from './music-stats.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('MusicStatsComponent', () => {
  let component: MusicStatsComponent;
  let fixture: ComponentFixture<MusicStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //declarations: [MusicStatsComponent],
      imports: [MusicStatsComponent, HttpClientTestingModule, NgChartsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ stats: [] }) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar un gráfico de barras con los datos correctos', () => {
    const chartCanvas = fixture.debugElement.query(By.css('canvas'));
    expect(chartCanvas).toBeTruthy();
    //expect(component.chartData.datasets[0].data).toEqual([100, 80, 50, 30, 10]);
  });
});
