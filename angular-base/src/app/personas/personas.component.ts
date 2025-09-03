import { Component } from "@angular/core";

@Component ({

    selector: 'personas-app',
    templateUrl: './personas.component.html'
    
})

export class MiComponentePersona {
    public mensaje= "mi mensaje queridísimo";
    public otroMensaje = 'segundo queridísimo mensaje';
}