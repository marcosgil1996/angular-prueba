import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(private route:Router) {

  }

  ngOnInit(): void {
    /*if(this.useLogeado.nombre === ''){
      this.route.navigate(['**']);
    }*/
  } 
}
