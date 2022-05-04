import { Component } from "@angular/core";

@Component ({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent{
    public titulo: string;
    public textoListado: string;
    constructor(){

        this.titulo = "Componente de videjuego";
        this.textoListado="Listado de juegos";
        console.log("Se ha cargado el componente: VideojuegoComponent");
    }
}