import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UnsubscriptionError } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
import { TransfereServiceService } from 'src/app/servicios/transfere-service.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  datosUser:Usuario = this.transferService.getData(); 

  constructor(private transferService:TransfereServiceService, private router:Router) {
    if(this.datosUser){
      console.log('LOGIN CORRECTO...');
      console.log(this.datosUser);
    }else{
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {
    
  }
}
