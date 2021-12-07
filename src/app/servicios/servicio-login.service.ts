import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  datoService:string;

  constructor(private http:HttpClient) { 
    this.datoService = '';
  }

  getUsuarios():Observable<Array<Usuario>>{
    return this.http.get<Array<Usuario>>(environment.URL_BACK+"/usuarios", this.httpOptions);
  }
}
