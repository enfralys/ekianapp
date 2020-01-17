import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './apis/data.service';
import { HttpClientModule,  } from '@angular/common/http';
import { ModalproductosComponent } from './shared/modalproductos/modalproductos.component';
import { Platform } from '@ionic/angular';
import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { LoginPage } from './login/login.page';
import { MenuPage } from './components/menu/menu.page';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { DeviceselectComponent } from './components/deviceselect/deviceselect.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';


@NgModule({
  declarations: [AppComponent,ConfigurationsComponent,DashboardComponent,DeviceselectComponent,ProductoComponent,ModalproductosComponent,LoginPage,MenuPage],
  entryComponents: [ModalproductosComponent],
  imports: [BrowserModule, IonicModule.forRoot(),IonicStorageModule.forRoot(), AppRoutingModule,
   NativeHttpModule,
  FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [
    StatusBar,
    DataService,
    SplashScreen,
    { provide:  RouteReuseStrategy, useClass: IonicRouteStrategy ,},

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
