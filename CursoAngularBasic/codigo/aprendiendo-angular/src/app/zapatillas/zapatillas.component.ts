import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatillas'; 

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color = 'yellow';
    public miMarca: string = "";

    constructor(){
        this.marcas = new Array();
        this.zapatillas =[
            new Zapatilla("Reebook Classic", 40, "Blanco", "Reebok", true),
            new Zapatilla("Nike Runner", 65, "Negras", "Nike", true),
            new Zapatilla("Adidas SuperStar", 100, "Blanco", "Adidas", false),
            new Zapatilla("Adidas Runner", 85, "Blanco", "Adidas", false),
            new Zapatilla("Fila Ladrillo",55,"Blanco","Fila",false)
        ];
    }

    ngOnInit(): void {
        console.log(this.zapatillas);

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            /* Condicional para que no haya marcas repetidas */
            if(this.marcas.indexOf(zapatilla.marca)<0){
            this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.miMarca);
    }

    addMarca(){
        /* Con esto añadimos al array la marca que metamos por el input */
        this.marcas.push(this.miMarca);
    }

    borrarMarca(indice){
        //delete this.marcas[indice];
        this.marcas.splice(indice,1);
    }
}
