import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user:Usuario = new Usuario();
  logints:FormGroup;
  userValid:number = 0;

  message:string = '';

  constructor(private route:ActivatedRoute, private router:Router, formBuilder:FormBuilder, private servicio:ServicioLoginService) { 
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
    this.route.params.subscribe(
      parametros=>{
        console.log(parametros['parametro']);
      }

    );
  }


  accesoTienda(){
    
    console.log(this.user.nombre +" - "+this.user.password);

    this.servicio.getUsuarios().subscribe(
      (usuarios:Array<Usuario>)=>{
        for(let i = 0; i < usuarios.length;i++){
          if(this.user.nombre === usuarios[i].nombre && this.user.password === usuarios[i].password){
            console.log('credenciales correctas');
            //Asignar el id al usuario
            this.user.id = usuarios[i].id;
            this.userValid = 1;
          }

          if(this.userValid == 1){
            this.message = 'CREDENCIALES CORRECTAS';
            this.router.navigate(['/articulos']);
          }else{
            this.message = 'CREDENCIALES INCORRECTAS';
          }
        }
      },
      (error) => console.log('error',error),
      ()=>console.log('Llamada al servicio rest USUARIO finalizada')
    );

    /*userValid == 1 ? this.message = 'CREDENCIALES CORRECTAAS'  : this.message = 'CREDENCAILES INCORRECTAS';
      
    
    this.router.navigate(['/componentes/articulos']);*/
    

  }

}
