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
  showPopup: boolean = false; // للتحكم في عرض الـ Popup

  openPopup() {
    this.showPopup = true;
    setTimeout(() => this.createDoughnutChart(), 0); // تأخير بسيط لضمان أن العنصر موجود في DOM
  }

  closePopup() {
    this.showPopup = false;
    if (this.chart) {
      this.chart.destroy(); // إزالة الرسم عند إغلاق الـ Popup
    }
  }

  // بيانات الرسم البياني
  data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL','AUG','SEP','OCT','NOV','DEC'], // أسماء الشهور
    datasets: [
      {
        label:'',
        data: [55, 45, 60, 57, 59, 67,75,102,95,85,89,93,150,120,80,75,85,95], // القيم
        backgroundColor: '#012D6A', // لون المنطقة
        borderColor: '#012D6A', // لون الحواف
        fill: true, // لملء المنطقة تحت الخط
        pointRadius: 0, // إزالة النقاط
        pointHoverRadius: 0
      }
    ]
  };

  barChartData = {
    labels: ['مساعدة شهرية لكبار السن','غارم','غارم محبوس','ضائقة'], // أسماء الحالات
    datasets: [
      {
        label: 'المتأخرة', // شريط "المتأخرة" لكل حالة
        data: [13, 7, 10, 30], // القيم المرتبطة بـ "المتأخرة"
        backgroundColor: [
          '#85BBD8', // نفس لون ضائقة
          '#BB3837', // نفس لون غارم محبوس
          '#BFA25D', // نفس لون غارم
          '#012D6A'  // نفس لون مساعدة شهرية
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
        label: 'علي الوقت', // شريط "علي الوقت" لكل حالة
        data: [25, 15, 30, 120], // القيم المرتبطة بـ "علي الوقت"
        backgroundColor: [
          '#85BBD8', // لون ضائقة
          '#BB3837', // لون غارم محبوس
          '#BFA25D', // لون غارم
          '#012D6A'  // لون مساعدة شهرية
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
              display: false // إخفاء القيم على المحور x
            },
            grid: {
              display: false // إخفاء خطوط الشبكة للمحور x (اختياري)
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
              display: false // إخفاء القيم على المحور x
            },
            grid: {
              display: false // إخفاء خطوط الشبكة للمحور x (اختياري)
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
            position: 'top', // وصف الألوان أعلى الرسم
          }
        },
        scales: {
          x: {
            grid: {
              display: false // إخفاء خطوط الشبكة للمحور x (اختياري)
            },
            beginAtZero: true, // بدء المحور X من الصفر
            stacked: false // فصل الأعمدة ضمن كل مجموعة
          },
          y: {
            position:'right',
            beginAtZero: true, // بدء المحور Y من الصفر
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
            color: '#fff', // لون النصوص داخل الرسم
            formatter: (value: number, ctx: any) => value, // عرض القيمة فقط
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
