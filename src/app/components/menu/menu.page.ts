import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { ModalproductosComponent } from 'src/app/shared/modalproductos/modalproductos.component';
import { DataService } from 'src/app/apis/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit{
productos = []
  constructor(public modalController: ModalController,private service:DataService,public loadingController: LoadingController) { 
    setTimeout(() => {
      this.loadProductos(1);
    }, 2000);
 
  }
s
  ngOnInit() {
  }

    loadProductos(value){
      let dvid   = "IPTA-S-A000";
     let  prod = 100;
     this.service.getproductos(dvid,(value * 100)).subscribe(res=>{
      let source:any = res;
      this.productos.push(source)
      this.service.getproductos(dvid,(value * 100) + 1).subscribe(res=>{
        let source:any = res;
        this.productos.push(source)
        this.service.getproductos(dvid,(value * 100) + 2 ).subscribe(res=>{
          let source:any = res;
          this.productos.push(source)
          this.service.getproductos(dvid,(value * 100) + 3).subscribe(res=>{
            let source:any = res;
            this.productos.push(source)
            this.service.getproductos(dvid,(value * 100) + 4).subscribe(res=>{
              let source:any = res;
              this.productos.push(source)
              this.service.getproductos(dvid,(value * 100) + 5).subscribe(res=>{
                let source:any = res;
                this.productos.push(source)
                this.service.getproductos(dvid,(value * 100) + 6).subscribe(res=>{
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

