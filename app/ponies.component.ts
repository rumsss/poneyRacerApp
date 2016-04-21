import { Component,OnInit } from 'angular2/core';
import { Poney } from './poney';
import { PoneyCmp } from './poney.component';
import { PoneyService} from './poney.service';

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
    directives: [PoneyCmp],
    providers: [PoneyService]
})


export class PoniesCmp implements OnInit {

    constructor(private _poneyService: PoneyService) {}

    ponies : Poney[];

    getPonies() {
        this.ponies = this._poneyService.getPonies();
    }

    ngOnInit() {
        this.getPonies();
        console.log(JSON.stringify(this.ponies));
    }


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