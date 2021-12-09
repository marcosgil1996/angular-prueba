import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Articulo, ArticuloDto } from 'src/app/clases/articulo';
import { Usuario } from 'src/app/clases/usuario';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { TransfereServiceService } from 'src/app/servicios/transfere-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  //Se pasan los datos de el usuario al la pagina principal
  datosUser:Usuario = this.transferService.getData(); 

  articulos:Array<Articulo> = new Array<Articulo>();
  artUpdate:Articulo = new Articulo();

  constructor(private transferService:TransfereServiceService, private servicio:ServicioService,  private router:Router) {
    /*router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      //Filtra los eventos, de cuando tu router termino de hacer una navegación
      const varUrl = environment.URL_BACK+"/"+"articulos";
      console.log(varUrl);
    });*/
    
    this.servicio = servicio;


    if(this.datosUser){
      console.log('LOGIN CORRECTO...');
      console.log(this.datosUser);
    }else{
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {
    this.obtenerArticulos();
  }

  obtenerArticulos(){
    //GET ARTICULOS
    this.servicio.getArticulos().subscribe(
    (articulos:Array<Articulo>)=>{
      this.articulos=articulos;
      console.log(this.articulos);
    },
    (error)=>console.log('error ',error),
    ()=>console.log('Llamada al servicio res finalized'));
  }

  updateArticulo(idArticulo:number) {
    
    this.articulos.forEach(element => {
      if(element.id == idArticulo){
        this.artUpdate = element;
      }
    });
    console.log('EDITAR ARTICULO -> \t '+JSON.stringify(this.artUpdate));
    this.router.navigate(['updateArticulo/'+idArticulo]);
    
  }

}
