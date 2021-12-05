import { UsuarioInterfaz } from "../interfaces/UsuarioInterfaz";

export class Usuario implements UsuarioInterfaz{
    id: number;
    nombre:string;
    password: string;

    constructor(){
        this.id = 0,
        this.nombre = '',
        this.password = ''
    }


}   
