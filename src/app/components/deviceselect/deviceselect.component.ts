import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-deviceselect',
  templateUrl: './deviceselect.component.html',
  styleUrls: ['./deviceselect.component.scss'],
})
export class DeviceselectComponent implements OnInit {

  constructor(private menu: MenuController) { 
    menu.enable(true)
  }

  ngOnInit() {}

}
