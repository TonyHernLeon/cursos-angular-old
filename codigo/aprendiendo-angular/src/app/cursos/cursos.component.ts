import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("Se inicia el objeto!!!");
  }

  ngDoCheck(): void { 
    console.log("Se ha modificado el objecto!!");
  }

  ngOnDestroy(): void {
      console.log("Se ha destruido el objecto");
  }

}
