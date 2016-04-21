import { Component } from 'angular2/core';
import { PoneyCmp } from './poney.component';

@Component({
    selector: 'ponies-cmp',
    template: `<h1> liste des poneys </h1>
               <div *ngIf="ponies.length > 0">
                   voici les {{ponies.length}} poneys!!
                   <ul>
                       <li *ngFor="#poney of ponies; #isEven=even" [style.color]="isEven?'green':'black'">
                            <poney-cmp [name]="poney.name" [id]="poney.id"></poney-cmp>
                       </li>
                   </ul>
               </div>
               <button (click)="refreshPonies()">refraichir la liste</button>`,
    directives: [PoneyCmp]
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