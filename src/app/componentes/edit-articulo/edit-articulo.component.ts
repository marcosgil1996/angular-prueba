import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArticuloDto, Articulo } from 'src/app/clases/articulo';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-edit-articulo',
  templateUrl: './edit-articulo.component.html',
  styleUrls: ['./edit-articulo.component.css']
})
export class EditArticuloComponent implements OnInit {

  idArticulo:number = 0;
  articuloEdit:Articulo;

  art:ArticuloDto;

  constructor(private _activeRouter:ActivatedRoute, private router:Router, private servicio:ServicioService) {
    console.log('EN EDIT ARTICULO');
    this.articuloEdit = new Articulo();
    this.servicio = servicio;
    this.art = new ArticuloDto();
  }



  ngOnInit(): void {
    this._activeRouter.params.subscribe(
      (params: Params) => {      
        this.idArticulo = params['num'];
    });
    
    console.log('NUMERO ARTICULO -> '+this.idArticulo);
    this.obtenerArticulo(this.idArticulo);

    console.log(this.articuloEdit);
  }

  obtenerArticulo(idArt:number){
     //GET ARTICULOS
     this.servicio.getArticulos().subscribe(
      (articulos:Array<Articulo>)=>{
        articulos.forEach(articulo =>{
          if(this.idArticulo == articulo.id){
            this.articuloEdit = articulo;
          }
        });
      },
      (error)=>console.log('error ',error),
      ()=>console.log('Llamada al servicio res finalized'));      
  }

  editarInformacion(){
    this.servicio.putArticulo(this.art,this.idArticulo).subscribe(
      (respuesta:ArticuloDto) => { 
        console.log(respuesta); 
        //this.obtenerArticulos();
        this.router.navigate(['/articulos']);
      }
    )

    
  }
}
