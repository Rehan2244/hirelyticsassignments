import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'
import { UIChart } from 'primeng/chart';
const green = '#48BB79'
const blue = '#083F88'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  datePickerFormat: string = 'yyyy-MM-dd';
  @ViewChild('calendar1') calendar1: any;
  @ViewChild('calendar2') calendar2: any;
  @ViewChild("chart") chartRef: any;
  @ViewChild("candidatestatuschart") chartRefCandidate: any;
  constructor(

  ) { }
  ngAfterViewInit() {
    this.createChart();
  }
  onChange(e: any) {
    this.selectedLang = {
      label: e.value,
      value: e.value
    }
  }

  dateRange: any[] = []
  dateRange2: any[] = []
  selectedLang: any = {
    label: 'Eng (UK)'
  };
  flagEn: string = './assets/images/United.png';
  flagHu: string = './assets/images/United.png';
  langOptions: any[] = [
    { label: 'Eng (US)', value: 'Eng (US)' },
    { label: 'Eng (UK)', value: 'Eng (UK)' }
  ];

  checkDate(cl: any, dateRange: any) {
    if (dateRange[1] != null) {
      cl.hideOverlay();
    }
  }
  selectedDate: any;
  weeklyMonthlyDD = [
    { label: 'Weekly', value: 'Weekly' },
    { label: 'Monthly', value: 'Monthly' },
  ]
  weeklyMonthlyDD2 = [
    { label: 'This Week', value: 'This Week' },
    { label: 'This Month', value: 'This Month' },
  ]
  selectedTime: any = {
    label: 'Monthly'
  }
  selectedTime2: any = {
    label: 'This Week'
  }
  onChangeTime(e: any) {
    this.selectedTime = {
      label: e.value,
      value: e.value
    }
  }
  onChangeTime2(e: any) {
    this.selectedTime2 = {
      label: e.value,
      value: e.value
    }
  }
  display: boolean = false
  className = 'dashboard';
  setLegend(id: any) {
    this.appliedJobData.datasets[id].hidden = !this.appliedJobData.datasets[id].hidden
    this.chartRef.refresh()

  }
  appliedJobData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Applied for Jobs',
      backgroundColor: '#083F88',
      borderRadius: 2.5,
      borderSkipped: false,
      data: [12000, 17000, 21000, 25000, 22000, 20000, 17000],
      hidden: false
    }, {
      label: 'Registered on Portal',
      backgroundColor: '#48BB79',
      borderRadius: 2.5,
      borderSkipped: false,
      data: [],
      hidden: false
    }
    ],
  }

  appliedJobOptios = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      // legend: {
      //     labels: {
      //         color: '#000',
      //         usePointStyle: true,
      //     },
      //     padding:{
      //       bottom:100
      //     },
      //     position: 'top',
      //     align:'start',
      //     pointStyle:'circle'
      // },
    },
    scales: {
      x: {
        ticks: {
          color: '#7B91B0',
          callback: function (val: any, index: any) {
            return val > 0 ? (val / 1000) + 'K' : 0;
          },
        },
        grid: {
          display: false
        },
        border: {
          display: false
        },
      },
      y: {
        ticks: {
          color: '#7B91B0'
        },
        grid: {
          display: false
        },
        border: {
          display: false
        }
      },
    }
  };

  candidatesStatisticData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Applied for Jobs',
      backgroundColor: '#fff',
      borderRadius: 2.5,
      data: [65, 59, 80, 81, 56, 55, 40]
    }, {
      label: 'Registered on Portal',
      backgroundColor: '#fff',
      borderRadius: 2.5,
      data: []
    }
    ],
  }
  candidatesStatisticOption = {
    indexAxis: 'x',
    plugins: {
      legend: {
        labels: {
          color: '#000',
          usePointStyle: true,
          display: false
        },
        position: 'top',
        align: 'start',
        pointStyle: 'circle',
        display: false
      },
    },
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        },
        border: {
          display: true,
          color: '#fff'
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        },
        border: {
          display: false
        }
      },
    }
  };
  setBorderRadius() {
    console.log('Border Radius', this.appliedJobData3.datasets)
    for (let i = 0; i < this.appliedJobData3.datasets.length; i++) {
      if (this.appliedJobData3.datasets[i].hidden) {
        this.appliedJobData3.datasets[i].borderRadius = [{ topRight: 0, bottomRight: 0, topLeft: 0, bottomLeft: 0 }]
      }
    }
    for (let i = 0; i < this.appliedJobData3.datasets.length; i++) {
      if (!this.appliedJobData3.datasets[i].hidden) {
        this.appliedJobData3.datasets[i].borderRadius = [{ ...this.appliedJobData3.datasets[i].borderRadius[0], topLeft: 50, bottomLeft: 50 }]
        break;
      } else if (this.appliedJobData3.datasets[i].hidden) {
        this.appliedJobData3.datasets[i].borderRadius = [{ topRight: 0, bottomRight: 0, topLeft: 0, bottomLeft: 0 }]
      }
    }
    for (let i = this.appliedJobData3.datasets.length - 1; i >= 0; i--) {
      if (!this.appliedJobData3.datasets[i].hidden) {
        this.appliedJobData3.datasets[i].borderRadius = [{ ...this.appliedJobData3.datasets[i].borderRadius[0], topRight: 50, bottomRight: 50 }]
        break;
      }
    }
    this.chartRefCandidate.refresh()
  }
  appliedJobData3 = {
    labels: ['Invited'],
    datasets: [{
      label: 'Invited (20)',
      backgroundColor: '#FF8A00',
      data: [20],
      borderRadius: [{ topLeft: 50, topRight: 0, bottomLeft: 50, bottomRight: 0 }],
      hidden: false
    }, {
      label: 'Pending (0)',
      backgroundColor: '#C2DCFF',
      data: [0],
      borderRadius: [{ topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 }],
      hidden: false

    }, {
      label: 'Selected (0)',
      backgroundColor: '#48BB79',
      data: [0],
      borderRadius: [{ topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 }],
      hidden: false

    }, {
      label: 'Rejected (5)',
      backgroundColor: '#E74C3C',
      data: [5],
      borderRadius: [
        { topLeft: 0, topRight: 50, bottomLeft: 0, bottomRight: 50 }
      ],
      hidden: false

    },
    ],
  };
  appliedJobOptios3 = {
    indexAxis: 'y',
    barPercentage: 1,
    borderSkipped: false,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        },
        border: {
          display: false,
        },
        stacked: true
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        },
        border: {
          display: false
        },
        stacked: true
      },
    }
  };

  scoreDistributionData = {
    labels: ['1 to 10', '10 to 20', '21 to 30', '31 to 40', '41 to 50', '51 to 60', '61 to 70', '71 to 100'],
    datasets: [{
      label: 'Applied for Jobs',
      backgroundColor: '#083F88',
      barThickness: 30,
      data: [60, 80]
    }
    ],
  }
  scoreDistributionOption = {
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      y: {
        grid: {
          display: true
        },
        border: { display: false },
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          padding: 26,
          color: '#000',
          font: {
            weight: 800,
          },
        },

      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          stepSize: 20,
          color: '#000',
          font: {
            weight: 800,
          },
        }
      },
    }
  }
  setDataForUserStatus(idx: any) {
    this.appliedJobData3.datasets[idx].hidden = !this.appliedJobData3.datasets[idx].hidden
    this.setBorderRadius()
    this.chartRefCandidate.refresh()
  }
  hiringCompanies = [
    { name: 'Emarates Corporation', image: './assets/images/emirates.png' },
    { name: 'Yahoo', image: './assets/images/yahoo.png' },
    { name: 'Emarates Corporation', image: './assets/images/emirates.png' },
    { name: 'Yahoo', image: './assets/images/yahoo.png' }
  ]
  innerLabel = {
    id: 'innerLabel',
    afterDatasetDraw(chart: any, args: any, pluginOptions: any) {
      const { ctx } = chart;
      const meta = args.meta;
      const xCoor = meta.data[0].x;
      const yCoor = meta.data[0].y + 5;
      const perc = chart.data.datasets[0].data[0] / meta.total * 101;
      ctx.fillStyle = '#444A6D'
      ctx.save();
      ctx.textAlign = 'center';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('100', xCoor, yCoor);
      ctx.restore();
    },
  };
  basicOptions = {
    title: {
      display: true,
      text: 'My Title',
      fontSize: 16
    },
    legend: {
    },
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: 'The title',
            font: {
              size: '60'
            }
          },
          {
            text: 1001,
            font: {
              size: '50'
            },
            color: 'grey'
          },
          {
            text: '$100.000',
            font: {
              size: '30'
            },
            color: 'red'
          },
          {
            text: '95%',
            font: {
              size: '45'
            },
            color: 'green'
          }
        ]
      }
    }
  }
  donutchart: any
  createChart() {

    this.donutchart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart,
      plugins: [this.innerLabel],

      data: {// values on X-Axis  
        labels: ['New Companies ' + 100, 'Old Companies ' + 20],
        datasets: [{
          label: 'My First Dataset',
          data: [100, 30],
          backgroundColor: [blue, green
          ],
          borderWidth: 0,
          hoverOffset: 4,
        }],

      },
      options: {
        layout: {
          padding: {
            left: 70,
            right: 70
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle'
            },
          },
        }
      }
    });
  }
}