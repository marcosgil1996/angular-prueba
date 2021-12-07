import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TransfereServiceService } from 'src/app/servicios/transfere-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  propiedadesPadre:string;

  outputHijo:string;
  
  logints:FormGroup;
  userValid:number = 0;

  userLogin:Usuario = new Usuario();


  message:string = '';

  constructor(private route:ActivatedRoute, 
              private router:Router, formBuilder:FormBuilder, 
              private servicio:ServicioLoginService, 
              private transfereService:TransfereServiceService) { 
    
      this.propiedadesPadre = '';
      this.outputHijo = '';
      this.logints=formBuilder.group(
        {
          "nombre":['',[
            Validators.required
          ]
          ],
          "password":['',[
            Validators.required
          ]
          
          ]
        }
      );
  }

  ngOnInit(): void {
    if(this.userLogin.nombre===''){
      console.log('USER NO LOGEADO');
    }
    console.log(this.userLogin.nombre);
    /*this.route.params.subscribe(
      parametros=>{
        console.log(parametros['parametro']);
      }

    );*/
  }


  accesoTienda(){
    
    console.log(this.userLogin.nombre +" - "+this.userLogin.password);

    this.servicio.getUsuarios().subscribe(
      (usuarios:Array<Usuario>)=>{
        for(let i = 0; i < usuarios.length;i++){
          if(this.userLogin.nombre === usuarios[i].nombre && this.userLogin.password === usuarios[i].password){
            console.log('credenciales correctas');
            //Asignar el id al usuario
            this.userLogin.id = usuarios[i].id;
            this.userLogin = usuarios[i];
            this.userValid = 1;
          }
          
        }
      },
      (error) => console.log('error',error),
      ()=> {
        console.log('Llamada al servicio rest USUARIO finalizada')
        console.log(this.userLogin);
        if(this.userValid == 1){
          this.message = 'CREDENCIALES CORRECTAS';
          
          this.transfereService.setData(this.userLogin);
          this.router.navigate(['/articulos']);
        }else{
          this.message = 'CREDENCIALES INCORRECTAS';
        }
      }

        
    );

    
    /*userValid == 1 ? this.message = 'CREDENCIALES CORRECTAAS'  : this.message = 'CREDENCAILES INCORRECTAS';
      
      
    
    this.router.navigate(['/componentes/articulos']);*/
    

  }

}
