import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component ({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public textoListado: string;
    constructor(){

        this.titulo = "Componente de videjuego";
        this.textoListado="Listado de juegos";
        console.log("Se ha cargado el componente: VideojuegoComponent");
    }

    ngOnInit(): void {
        console.log("OnInit ejecutado!!");
    }

    ngDoCheck(): void {
        console.log("DoCheck ejecutado!!");
    }
    
    ngOnDestroy(): void {
        console.log("OnDestroy ejecutado!!");
    }

    cambiarTitulo(){
        this.titulo ="Nuevo título del componente";
    }
}