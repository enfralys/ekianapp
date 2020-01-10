import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { ModalproductosComponent } from 'src/app/shared/modalproductos/modalproductos.component';
import { DataService } from 'src/app/apis/data.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit{
productos = []
sdispositive;
dispositives
page = 0;
  constructor(private storage:Storage,public modalController: ModalController,private service:DataService,public loadingController: LoadingController,private router:Router) { 
    
    this.storage.get('dispositives').then(res => {
      console.log( JSON.parse(res));
      this.dispositives = JSON.parse(res)
     
     })
  }

  ngOnInit()
   {
  
  }

    loadProductos(){
      this.productos = [];
      let value = this. page;
      let dvid   = !this.sdispositive ? this.dispositives[0].deviceid : this.sdispositive;
      let  prod = 100;
      this.service.getproductos(dvid,(value + 100)).subscribe(res=>{
      let source:any = res;
      this.productos.push(source)
      this.service.getproductos(dvid,(value + 100) + 1).subscribe(res=>{
      let source:any = res;
      this.productos.push(source)
      this.service.getproductos(dvid,(value + 100) + 2 ).subscribe(res=>{
      let source:any = res;
          this.productos.push(source)
          this.service.getproductos(dvid,(value + 100) + 3).subscribe(res=>{
            let source:any = res;
            this.productos.push(source)
            this.service.getproductos(dvid,(value + 100) + 4).subscribe(res=>{
              let source:any = res;
              this.productos.push(source)
              this.service.getproductos(dvid,(value + 100) + 5).subscribe(res=>{
                let source:any = res;
                this.productos.push(source)
                this.service.getproductos(dvid,(value + 100) + 6).subscribe(res=>{
                  let source:any = res;
                  this.productos.push(source)
                })
               })
              })
            })
          })
        })
      })
      this.presentLoading()

    }

    codeSelected(){
      setTimeout(() => {
        this.loadProductos();
      }, 2000);
    }

      next(){
        this.page = this.page + 100;
        this.loadProductos();

      }
      back(){
        if(this.page  >= 100){
          this.page = this.page - 100;
          this.loadProductos();

        }
      
      }
    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Espere...',
        duration: 20000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
  
      console.log('Loading dismissed!');
    }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalproductosComponent
    });
    return await modal.present();
  }
}

