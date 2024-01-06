import { Component } from '@angular/core';
import {Chart} from 'chart.js'
import {MenuItem} from 'primeng/api';
const green='#48BB79'
const blue='#083F88'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  ngAfterViewInit(){
    this.createChart();
  }
  onChange(e:any){
    console.log('e',e.value)
    console.log(this.selectedLang)
    this.selectedLang=e.value
  }
  selectedLang: any;
  flagHu: string = './assets/img/flags/flag_hu.svg';
  flagEn: string = './assets/img/flags/flag_en.svg';
  langOptions: any[] = [
      {label: 'magyar', value: 'hu'},
      {label: 'english', value: 'en'}  
  ];

  display:boolean=false
  className='dashboard';
  appliedJobData={
    labels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    datasets:[{
        label: 'Applied for Jobs',
        backgroundColor: '#083F88',
        borderRadius:2.5,
        borderSkipped:false,
        data: [65, 59, 80, 81, 56, 55, 40]
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
                color: '#000'
            },
            grid: {
                display:false
            },
            border:{
              display:false
            }
        },
        y: {
            ticks: {
                color: '#000'
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
    data: [10]
},{
  label:'Pending',
  backgroundColor: '#C2DCFF',
  data: [30]
},{
  label:'Selected',
  backgroundColor: '#48BB79',
  data: [30]
},{
  label:'Rejected',
  backgroundColor: '#E74C3C',
  data: [30]
},
],
};
appliedJobOptios3={
  indexAxis: 'y',
  barPercentage:1,
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

  hiringCompanies=[
    {name:'Emarates Corporation',image:''},
    {name:'Yahoo',image:''},
    {name:'Emarates Corporation',image:''},
    {name:'Yahoo',image:''}
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
      ctx.fillStyle='#f00'
      ctx.save();
      ctx.textAlign = 'center';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(perc.toFixed(2) + '%', xCoor, yCoor);
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
          scales:{},
          elements:{
            
          },
          aspectRatio:2.5,
          plugins: {
            legend:{
              display:false
            },
            title: {
              display: true,
              text: "Reported Fault Allocation",
              color: "#D6001C",
                  font: {
                      family: "AvenirNextLTW01-Regular",
                      size: 16,
                      style:'normal'
                  }
              }
        }
      }
      });
    }
}