import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrl: './care.component.css'
})
export class CareComponent {
  chart: any;
  showPopup: boolean = false;

  openPopup() {
    this.showPopup = true;
    setTimeout(() => this.createDoughnutChart(), 0); 
  }

  closePopup() {
    this.showPopup = false;
    if (this.chart) {
      this.chart.destroy(); 
    }
  }

  data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL','AUG','SEP','OCT','NOV','DEC'], 
    datasets: [
      {
        label:'',
        data: [55, 45, 60, 57, 59, 67,75,102,95,85,89,93,150,120,80,75,85,95],
        backgroundColor: '#012D6A', 
        borderColor: '#012D6A', 
        fill: true, // 
        pointRadius: 0, //  
        pointHoverRadius: 0
      }
    ]
  };

  barChartData = {
    labels: ['مساعدة شهرية لكبار السن','غارم','غارم محبوس','ضائقة'
    ],  
    datasets: [
      {
        label: 'المتأخرة', 
        data: [13, 7, 10, 30],
        backgroundColor: [
          '#85BBD8', 
          '#BB3837', 
          '#BFA25D', 
          '#012D6A'  
        ],
        borderColor: [
          '#85BBD8',
          '#BB3837',
          '#BFA25D',
          '#012D6A'
        ],
        borderWidth: 1,
        barThickness: 20
      },
      {
        label: 'علي الوقت', 
        data: [25, 15, 30, 120], 
        backgroundColor: [
          '#85BBD8', 
          '#BB3837', 
          '#BFA25D', 
          '#012D6A'  
        ],
        borderColor: [
          '#85BBD8',
          '#BB3837',
          '#BFA25D',
          '#012D6A'
        ],
        borderWidth: 1,
        barThickness: 20
      },
    ]
  };

  constructor( public dialog: MatDialog) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.createChart();
    this.createBarChart();
  }

  createChart() {
    this.chart = new Chart('myAreaChart', {
      type: 'line',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            beginAtZero:true
          },
          y: {
            ticks: {
              display: false 
            },
            grid: {
              display: false 
            }
          }
        }
      }
    });
    this.chart = new Chart('myAreaChart2', {
      type: 'line',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            beginAtZero:true
          },
          y: {
            ticks: {
              display: false 
            },
            grid: {
              display: false 
            }
          }
        }
      }
    });

  }

  createBarChart() {
    this.chart = new Chart('myBarChart', {
      type: 'bar',
      data: this.barChartData,
      options: {
        responsive: true,
        plugins: {
          
          legend: {
            position: 'top', 
          },
          
        },
        scales: {
          x: {
            grid: {
              display: false 
            },
            beginAtZero: true, 
            stacked: false 
          },
          y: {
            position:'right',
            beginAtZero: true, 
          }
        }
      }
      
    });
  }
  createDoughnutChart() {
    Chart.register(ChartDataLabels);
    this.chart = new Chart('popupDoughnutChart', {
      type: 'doughnut',
      data: {
        labels: [''],
        datasets: [
          {
            label: 'عدد الحالات',
            data: [50, 30,19,25,1,25],
            backgroundColor: ['#012D6A', '#BB6038','#85BBD8','#C0A25D','#D6D6D6','#545453'],
            borderColor:['#012D6A', '#BB6038','#85BBD8','#C0A25D','#D6D6D6','#545453'],
            hoverBackgroundColor: ['#012D6A', '#BB6038','#85BBD8','#C0A25D','#D6D6D6','#545453'],
            hoverBorderColor:['#012D6A', '#BB6038','#85BBD8','#C0A25D','#D6D6D6','#545453'],
            hoverBorderWidth:16
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          datalabels: {
            color: '#fff', 
            formatter: (value: number, ctx: any) => value, 
            font: {
              weight: 'bold',
              size: 30
            },
            textAlign: 'center'
          }
        }
      }
    });
  }
}
