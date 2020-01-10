import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataService } from '../apis/data.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
email;password;tabBarElement 
  constructor(private storage: Storage,private router:Router,private service:DataService,public toastController: ToastController,public loadingController: LoadingController)
  
  {
/*
    this.service.autDispen().subscribe(res=>{
    setTimeout(() => {
      this.service.autDispen().subscribe(res=>{
        setTimeout(() => {
          this.service.autDispen().subscribe(res=>{
            setTimeout(() => {
              this.service.autDispen().subscribe(res=>{
                setTimeout(() => {
                  this.service.autDispen().subscribe(res=>{
                    setTimeout(() => {
                      this.service.autDispen().subscribe(res=>{
                        console.log(res);
                    })
                  
                    }, 5000);
                })
              
                }, 5000);
            })
          
            }, 5000);
        })
      
        }, 5000);
    })
  
    }, 5000);
        console.log(res);
      
    })
    */
  } 


  autorizar(){
    setTimeout(() => {
      
    }, 5000);
  }

  login(){
    if (this.email == "ekia@admin" && this.password == 1234) {
      this.presentLoading();
      this.router.navigateByUrl("select");
    }else{
      this.presentToast("Wrong user or pass")
    }
    /*
    this.service.login(this.email,this.password).subscribe(res=>{
    let source:any = res;
    console.log(source);
      if (source.sucess == true) {
        this.storage.set('email',source.email)
        this.getDispositives()
        this.router.navigateByUrl("prod");
      }
    
},err =>{
  console.log(err.error.msj);

})
    
*/
  }


  getDispositives(){
    console.log("aaa");
    this.storage.get('email').then(res=>{
      console.log(res);
      this.service.dispositives(res).subscribe(res=>{
     let source :any= res;
        this.storage.set('dispositives',JSON.stringify(source.data))
    })
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
