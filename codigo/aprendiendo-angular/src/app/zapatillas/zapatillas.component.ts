import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatillas'; 
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatillas>;

    constructor(){
        this.zapatillas =[
            new Zapatilla("Reebook Classic", 40, "Blanco", "Reebok", true),
            new Zapatilla("Nike Runner", 65, "Nike", "Negras",true),
            new Zapatilla("Adidas SuperStar", 100, "Adidas", "Blanco",false),
            new Zapatilla("Fila Ladrillo",55,"Fila","Blanco",false)
        ];
    }

    ngOnInit(): void {
        console.log(this.zapatillas);
    }
}
