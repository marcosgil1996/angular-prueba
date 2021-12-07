import { ArticuloDtoInterfaz, ArticuloInterfaz } from "../componentes/interfaces/ArticuloInterfaz";


export class Articulo implements ArticuloInterfaz{
    id: number;
    name: string;
    description: string;
    stock: number;
    image:string;
    selected:boolean;
    quantity:number;

    constructor(){
        this.id = 0;
        this.name = '';
        this.description = '';
        this.stock = 0;
        this.image='';
        this.selected = false;
        this.quantity = 0;
    }
}

export class ArticuloDto implements ArticuloDtoInterfaz{
    name: string;
    description: string;
    stock: number;
    image:string;
    selected:boolean;
    quantity:number;

    constructor(){
        this.name = '';
        this.description = '';
        this.stock = 0;
        this.image='https://mejorantivirus.net/wp-content/uploads/2018/01/OLED-PC-1.jpg';
        this.selected = false;
        this.quantity = 0;
    }
}

export class ArticuloCarritoDto{
    id:number;
    name: string;
    image:string;
    quantity:number;

    constructor(){
        this.id = 0;
        this.name = '';
        this.image='https://mejorantivirus.net/wp-content/uploads/2018/01/OLED-PC-1.jpg';
        this.quantity = 0;
    }
}