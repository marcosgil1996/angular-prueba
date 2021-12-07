import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioLoginService } from './servicio-login.service';

@Injectable({
  providedIn: 'root'
})
export class TransfereServiceService{

  constructor(
    private router:Router,
    private loginService:ServicioLoginService
  ) { }

  private data:any;

  setData(data:any){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData(){
    this.data = undefined;
  }

}
