import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private http: HttpClient) { }

  url = "http://ekiavending.com:1880";
  headers = new HttpHeaders()
  .set("Content-Type", "application/json");


  getAcumDay(deviceid,dia,mes,ano){
 
  let json = {
    deviceType:"EKIA_IPTA",
    deviceId:deviceid,
    dia: dia,
    mes: mes,
    ano: ano
  }
  

    return  this.http.put (`${this.url+ '/solicitar_acu_dia'}`,json);
 }

 getAcumMes(deviceid,mes,ano){
 
  let json = {
    deviceType:"EKIA_IPTA",
    deviceId:deviceid,
    mes: mes,
    ano: ano
  }
  

    return  this.http.put (`${this.url+ '/solicitar_acu_mes'}`,json);
 }

 
 getproductos(deviceid,producto){
 
  let json = {
    deviceType:"EKIA_IPTA",
    deviceId:deviceid,
    producto:producto
    
  }
  

    return  this.http.put (`${this.url+ '/solicitar_producto'}`,json);
 }

 login( email,password){
  let json = {
   email:email ,
   password:password
    
  }
  

    return  this.http.post (`http://104.248.8.47:5000/login`,json);
 }
 imprimr(){console.log("Impreso");}


 
}
