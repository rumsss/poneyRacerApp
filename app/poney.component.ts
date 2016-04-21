import { Component, Input } from 'angular2/core';

@Component({
    selector: 'poney-cmp',
    template: `<div>Nom: {{ name }} <br/>
                Id: {{ id }}
               </div>`
})

export class PoneyCmp {
    @Input()
    name: String;

    @Input()
    id: number;
}