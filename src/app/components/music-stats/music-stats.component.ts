import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts'; // Importar NgChartsModule
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-music-stats',
  templateUrl: './music-stats.component.html',
  standalone: true,
  imports: [
    MatCardModule, MatTableModule, CommonModule, NgChartsModule,
  ],
})
export class MusicStatsComponent implements OnInit {
  voteResults: any[] = [];
  displayedColumns: string[] = ['style', 'votes'];

  chartLabels: string[] = [];
  chartData: ChartData<'bar'> = { datasets: []};
  chartOptions: any[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.musicService.getVoteResultsDummy().subscribe((results) => {
      this.voteResults = results;
      this.chartLabels = results.map((res: any) => res.musicStyleName);
      this.chartData =
        {
          labels: results.map((res: any) => res.musicStyleName),
          datasets: [
          {
            data: results.map((res: any) => res.summaryOfVotes),
            label: 'Votos' ,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            }
          ]
        };
      this.chartOptions = [
        {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }
      ];

    });
  }
}
