import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'espar'
})
export class esParPipe implements PipeTransform {
    transform(value: any){
        return "El año es: " +value;
    }
}