import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  route:string;
  navigate : any;  
  public appPages = [
    {
      title: 'Acumulados',
      url: '/prod',
      icon: 'stats'
    },
    {
      title: 'Productos',
      url: '/producto',
      icon: 'beer'
    },
    {
      title: 'Configuraciones',
      url: '/config',
      icon: 'settings'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private menu:MenuController
  ) {
    this.sideMenu();

    this.initializeApp();
    
    this.route = this.router.url
console.log(this.route);
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Chat",
        url   : "/chat",
        icon  : "chatboxes"
      },
      {
        title : "Contacts",
        url   : "/contacts",
        icon  : "contacts"
      },
    ]
  }
}
