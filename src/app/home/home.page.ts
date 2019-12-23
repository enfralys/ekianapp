import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataService } from '../apis/data.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
email;password;
  constructor(private router:Router,private service:DataService,public toastController: ToastController,public loadingController: LoadingController) {}



  login(){
    
    this.service.login(this.email,this.password).subscribe(res=>{
      if (res) {
        this.router.navigateByUrl("prod");
      }
      this.presentLoading();
},err =>{
  console.log(err.error.msj);
  this.presentToast(err.error.msj)
})
    

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
