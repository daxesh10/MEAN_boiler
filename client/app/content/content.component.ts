import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'mycontent',
    templateUrl:'./content.component.html'
})

export class ContentComponent {

    constructor(){}

    name:string = 'dexter'
}