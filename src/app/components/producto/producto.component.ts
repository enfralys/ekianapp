import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/apis/data.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  location = "Ver acumulado";
  machinel = "Maquina ubicada en el centro comercial:"
  total = 0;
  totalt = 0;
  date :boolean = true;
  mdate;
  ddate;
  constructor(private service: DataService,public toastController: ToastController,public loadingController: LoadingController) { 
    this.mdate = this.mdate;
  }

  ngOnInit() {}

  day(){
    if(this.date == true){
      this.date = false;
    }
  }

  take(){
    console.log(this.ddate,this.mdate);

    if(this.ddate){
      console.log('dia');
    let dvid   = "IPTA-S-A000";
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

  let dvid   = "IPTA-S-A000";
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

}
