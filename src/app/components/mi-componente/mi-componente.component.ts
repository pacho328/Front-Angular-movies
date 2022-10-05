import {Component} from '@angular/core';

@Component({
    selector: "mi-componente",
    templateUrl: "./mi-componente.component.html"
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;


    constructor(){
        this.titulo = "Quiero";
        this.comentario ="ganar!!"
        this.year = 623;
        console.log("Componente cargado");
        
    }
}