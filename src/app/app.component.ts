import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {Chart} from 'chart.js'
const green='#48BB79'
const blue='#083F88'
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
  constructor(

  ){}
  ngAfterViewInit(){
    this.createChart();
  }
  onChange(e:any){
    console.log('e',e.value)
    console.log(this.selectedLang)
    this.selectedLang={
      label:e.value,
      value:e.value
    }
  }
  dateRange:any[]=[]
  dateRange2:any[]=[]
  selectedLang: any={
    label:'Eng (UK)'
  };
  flagEn: string = './assets/images/United.png';
  flagHu: string = './assets/images/United.png';
  langOptions: any[] = [
      {label: 'Eng (US)', value: 'Eng (US)'},
      {label: 'Eng (UK)', value: 'Eng (UK)'}  
  ];

  checkDate(cl:any,dateRange:any){
    if(dateRange[1]!=null){
      cl.hideOverlay();
    }
  }
  selectedDate:any;
  weeklyMonthlyDD=[
    {label:'Weekly',value:'Weekly'},
    {label:'Monthly',value:'Monthly'},
  ]
  weeklyMonthlyDD2=[
    {label:'This Week',value:'This Week'},
    {label:'This Month',value:'This Month'},
  ]
  selectedTime:any={
    label:'Monthly'
  }
  selectedTime2:any={
    label:'This Week'
  }
  onChangeTime(e:any){
    this.selectedTime={
      label:e.value,
      value:e.value
    }
  }
  onChangeTime2(e:any){
    this.selectedTime2={
      label:e.value,
      value:e.value
    }
  }
  display:boolean=false
  className='dashboard';
  appliedJobData={
    labels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    datasets:[{
        label: 'Applied for Jobs',
        backgroundColor: '#083F88',
        borderRadius:2.5,
        borderSkipped:false,
        data: [12000, 17000, 21000, 25000, 22000, 20000, 17000]
      },{
        label: 'Registered on Portal',
        backgroundColor: '#48BB79',
        borderRadius:2.5,
        borderSkipped:false,
        data: []
      }
    ],
  }
  
  appliedJobOptios={
    indexAxis: 'y',
    plugins: {
        legend: {
            labels: {
                color: '#000',
                usePointStyle: true,
            },
            position: 'top',
            align:'start',
            pointStyle:'circle'
        },
    },
    scales: {
        x: {
            ticks: {
                color: '#7B91B0',
                callback: function(val:any, index:any) {
                  // Hide every 2nd tick label
                  return val>0?(val/1000)+'K':0;
                },
            },
            grid: {
                display:false
            },
            border:{
              display:false
            },
        },
        y: {
            ticks: {
                color: '#7B91B0'
            },
            grid: {
                display:false
            },
            border:{
              display:false
            }
        },
    }
};

appliedJobData2={
  labels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
  datasets:[{
      label: 'Applied for Jobs',
      backgroundColor: '#fff',
      borderRadius:2.5,
      data: [65, 59, 80, 81, 56, 55, 40]
    },{
      label: 'Registered on Portal',
      backgroundColor: '#fff',
      borderRadius:2.5,
      data: []
    }
  ],
}
appliedJobOptios2={
  indexAxis: 'x',
  plugins: {
      legend: {
          labels: {
              color: '#000',
              usePointStyle: true,
              display:false
          },
          position: 'top',
          align:'start',
          pointStyle:'circle',
          display:false
      },
  },
  scales: {
      x: {
          ticks: {
              display:false
          },
          grid: {
              display:false
          },
          border:{
            display:true,
            color:'#fff'
          }
      },
      y: {
          ticks: {
            display:false
          },
          grid: {
              display:false
          },
          border:{
            display:false
          }
      },
  }
};
appliedJobData3={
  labels:['Invited'],
  datasets: [{
    label:'Invited',
    backgroundColor: '#FF8A00',
    data: [10],
    borderRadius:[{ topLeft: 50, topRight: 0, bottomLeft: 50, bottomRight: 0 }]
},{
  label:'Pending',
  backgroundColor: '#C2DCFF',
  data: [30],
  
  
},{
  label:'Selected',
  backgroundColor: '#48BB79',
  data: [30]
},{
  label:'Rejected',
  backgroundColor: '#E74C3C',
  data: [30],
  borderRadius:[
    { topLeft: 0, topRight: 50, bottomLeft: 0, bottomRight: 50 }
  ],
},
],
};
appliedJobOptios3={
  indexAxis: 'y',
  barPercentage:1,
  borderSkipped:false,
  plugins: {
      legend: {
          labels: {
              color: '#000',
              usePointStyle: true,
              display:false
          },
          position: 'left',
          align:'center',
          pointStyle:'circle',
      },
  },
  scales: {
      x: {
          ticks: {
              display:false
          },
          grid: {
              display:false
          },
          border:{
            display:false,
          },
          stacked:true
      },
      y: {
          ticks: {
            display:false
          },
          grid: {
              display:false
          },
          border:{
            display:false
          },
          stacked:true
      },
  }
};

scoreDistributionData={
  labels:['1 to 10','10 to 20','21 to 30','31 to 40','41 to 50','51 to 60','61 to 70','71 to 100'],
  datasets:[{
      label: 'Applied for Jobs',
      backgroundColor:'#083F88',
      barThickness:30,
      data: [60, 80]
    }
  ],
}
scoreDistributionOption ={
  indexAxis: 'x',
  plugins: {
      legend: {
          display:false
      },
  },
  scales: {
      y: {
          grid: {
              display:true
          },
          border:{display:false},
          suggestedMax: 100,
          ticks: {
            stepSize:20,
            padding: 26,
            color: '#000',
            font:{
              weight:800,
            },
          },

      },
      x: {
        grid: {
            display:false
        },
        ticks: {
          stepSize:20,
          color: '#000',
          font:{
            weight:800,
          },
        }
    },
  }
}
  hiringCompanies=[
    {name:'Emarates Corporation',image:'./assets/images/emirates.png'},
    {name:'Yahoo',image:'./assets/images/yahoo.png'},
    {name:'Emarates Corporation',image:'./assets/images/emirates.png'},
    {name:'Yahoo',image:'./assets/images/yahoo.png'}
  ]
  basicData={labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'First Dataset',
          data: [100,10],
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
                }
              ]
            }
          }
      }
  ]}
  innerLabel = {
    id: 'innerLabel',
    afterDatasetDraw(chart:any, args:any, pluginOptions:any) {
      const { ctx } = chart;
      const meta = args.meta;
      const xCoor = meta.data[0].x;
      const yCoor = meta.data[0].y+5;
      const perc = chart.data.datasets[0].data[0] / meta.total * 101;
      ctx.fillStyle='#444A6D'
      ctx.save();
      ctx.textAlign = 'center';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('100', xCoor, yCoor);
      ctx.restore();
    },
  };
  basicOptions={
    title: {
        display: true,
        text: 'My Title',
        fontSize: 16
    },
    legend: {
    },
    // plugins: {
    //   legend: {
    //     position: 'bottom',
    //       labels: {
    //           color: '#495057'
    //       }
    //   }
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
    }}
    chart:any
    createChart(){

      this.chart = new Chart("MyChart", {
        type: 'doughnut', //this denotes tha type of chart,
        plugins:[this.innerLabel],

        data: {// values on X-Axis
          
          labels: ['New Companies '+100, 'Old Companies '+20 ],
          datasets: [{
            label: 'My First Dataset',
            data: [100,30],
            backgroundColor: [blue,green
            ],
            borderWidth:0,
            hoverOffset: 4
          }],
        },
        options: {
          responsive:true,
          plugins: {
            legend:{
              display:false
            },
        }
      }
      });
    }
}