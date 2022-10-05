import { Component, OnInit ,DoCheck } from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import { log } from 'util';
import{PeliculaService} from '../../services/peliculas.service'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck {

  public peliculas: Pelicula[];
  public fav: Pelicula;
  constructor(
    private _peliculaService:PeliculaService
  ) {
    this.peliculas = [
      new Pelicula("1947",2010,'https://media.vogue.mx/photos/5e26e68b07b0840008ae2c13/master/pass/1917.jpg'),
      new Pelicula("joker",2015,'https://img-cdn.hipertextual.com/files/2019/09/hipertextual-warner-no-tiene-planes-secuela-joker-ahora-2019170034.jpg?strip=all&lossy=1&quality=55&resize=740%2C490&ssl=1'),
      new Pelicula("ford and ferrary", 2011 ,'https://image.tmdb.org/t/p/w500/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg')
    ]
   }

  ngOnInit() {
    console.log(this._peliculaService.holaMundo());
    
  }
   ngDoCheck(){
     
   }
   mostrarFavorita(event){
     this.fav = event.pelicula;
   }
}
