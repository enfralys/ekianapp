import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './apis/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalproductosComponent } from './shared/modalproductos/modalproductos.component';

@NgModule({
  declarations: [AppComponent,DashboardComponent,ProductoComponent,ModalproductosComponent],
  entryComponents: [ModalproductosComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [
    StatusBar,
    DataService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
