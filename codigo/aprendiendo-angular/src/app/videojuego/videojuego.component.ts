import { Component } from "@angular/core";

@Component ({
    selector: 'videojuego',
    template: `
            <h2>Componente de videjuego</h2>
            <ul>
                <li>GTA</li>
                <li>Prince of Persia</li>
                <li>Tekken</li>
                <li>Mario</li>
            </ul>
        `
})
export class VideojuegoComponent{
    
    constructor(){
        console.log("Se ha cargado el componente: VideojuegoComponent");
    }
}