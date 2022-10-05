import {Injectable} from '@angular/core';
import {Pelicula} from '../models/pelicula';


@Injectable()
export class PeliculaService{
    holaMundo(){
        return "hola servicios";
    }
    
}