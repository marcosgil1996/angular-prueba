import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo, ArticuloDto } from '../clases/articulo';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class ServicioService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  datoServicio:string;

  //articulos:Array<Articulo> = new Array<Articulo>();
  constructor(private http:HttpClient) {
    this.datoServicio = '';
    //this.articulos = myItems;
  }

  getArticulos():Observable<Array<Articulo>>{
    return this.http.get<Array<Articulo>>(environment.URL_BACK+"/articulos");
  }
  
  postArticulo(articulo:ArticuloDto):Observable<ArticuloDto>{
    return this.http.post<ArticuloDto>(environment.URL_BACK+"/articulos",articulo,this.httpOptions);
  }

  putArticulo(articulo:ArticuloDto, idArticulo:number):Observable<ArticuloDto>{
    return this.http.put<Articulo>(environment.URL_BACK+"/articulos"+"/"+idArticulo,articulo,this.httpOptions);
  }
  
  deleleArticulo(idArticulo:number){
    return this.http.delete(environment.URL_BACK+"/articulos"+'/'+idArticulo,this.httpOptions);
  }

  deleteAll(){
    return this.http.delete(environment.URL_BACK+"/articulos", this.httpOptions);
  }

  getDatosServicio(){
    return this.datoServicio;
  }

  setDatosServico(datos:string){
    this.datoServicio = datos;
  }
}
