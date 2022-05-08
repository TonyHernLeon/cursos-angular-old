import { Component } from '@angular/core';
import { Config } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master en JavaScript y Angular';
  public descripcion: string;
  public mostrarVideojuegos: boolean = true;
  public config;

  constructor(){
    this.title = Config.tituloPrincipal;
    this.descripcion = Config.descripcionPrincipal 
    this.config = Config;
  }

  ocultarVideojuegos(value){
    this.mostrarVideojuegos = value;
  }
}
