import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public nombre: string;
  constructor(
    private _route: ActivatedRoute,
    private _route2: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
      this.nombre = params.nombre;
    })
  }

  redireccion(){
    //this._route2.navigate(["/formulario"]); una forma
    this._route2.navigate(["/pagina", "pacho"]); 

  }

}
