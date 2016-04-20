import { Component } from 'angular2/core';

@Component({
    selector: 'ponies-cmp',
    template: `<h1> liste des poneys </h1>
               <div *ngIf="ponies.length > 0">
                   voici les {{ponies.length}} poneys!!
                   <ul>
                       <li *ngFor="#poney of ponies; #isEven=even" [style.color]="isEven?'green':'black'">
                            {{poney.name}}
                       </li>
                   </ul>
               </div>
               <button (click)="refreshPonies()">refraichir la liste</button>`
})


export class PoniesCmp {
    ponies: Array<any> = [{
        id: 1,
        name: "jhonny jumper"
    },
    {
        id: 2,
        name: "apres l'amour"
    }];

    refreshPonies() {
        this.ponies = [{
            id: 4,
            name: "newHorseOne"
        },
        {
            id: 5,
            name: "newHorseTwo"
        }]
    }
}