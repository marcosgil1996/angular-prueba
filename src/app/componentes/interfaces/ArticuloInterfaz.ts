export interface ArticuloInterfaz {
    id: number,
    name: string,
    description: string,
    stock: number,
    image: string,
    selected:boolean,
    quantity:number
}

export interface ArticuloDtoInterfaz {
    name: string,
    description: string,
    stock: number,
    image: string,
    selected:boolean,
    quantity:number
}
