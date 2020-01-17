import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/apis/data.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  @ViewChild('barChart',{static: false}) barChart;
  location = "Ver acumulado";
  machinel = "Maquina ubicada en el centro comercial:"
  total = 0;
  bars: any;
  colorArray: any;
  totalt = 0;
  dispositives = [];
  date :boolean = true;
  mdate;
  ddate;
  sdispositive;
  constructor(private storage: Storage,private service: DataService,public toastController: ToastController,public loadingController: LoadingController) { 
    this.mdate = this.mdate;
   this.storage.get('dispositives').then(res => {
     console.log( JSON.parse(res));
     this.dispositives = JSON.parse(res)
    
    })
  }

  ngOnInit() {}
  ionViewDidEnter() {
    this.createBarChart();
  }


  day(){
    if(this.date == true){
      this.date = false;
    }
  }

  take(){
    console.log(this.ddate,this.mdate,this.sdispositive);

    if(this.ddate){
      console.log('dia');
    let dvid   =  this.sdispositive;
    let date = new Date(this.ddate);
    console.log(date.getDate(),date.getMonth()+1,date.getFullYear());
    this.presentLoading();
this.service.getAcumMes(dvid,date.getMonth()+1,date.getFullYear()).subscribe(res =>{
  let source:any = res;
  if(source.code == 401) return this.presentToast(source.message);
  this.total = source.ventas;
  this.totalt = source.transacciones;

})
    this.ddate = null;
     
}else{
  console.log('mes');

  let dvid   = this.sdispositive;
  let date = new Date(this.mdate);
  console.log(date.getDate(),date.getMonth()+1,date.getFullYear());
  this.presentLoading();
this.service.getAcumMes(dvid,date.getMonth()+1,date.getFullYear()).subscribe(res =>{
let source:any = res;
if(source.code == 401) return this.presentToast(source.message);
this.total = source.ventas;
this.totalt = source.transacciones;

})
  

this.mdate = null;

}

    


  }

  month(){
    if(this.date == false){
      this.date = true;
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Espere...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }


  async presentToast(msj) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000
    });
    toast.present();
  }


  createBarChart() {
    
      let bars = this.barChart.nativeElement
      bars.height = 300;
     
    this.bars = new Chart(bars, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
        datasets: [{
          label: 'Ultimos 6 meses',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5],
          backgroundColor: '#d33939', // array should have same number of elements as number of dataset
          borderColor: '#d33939',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
