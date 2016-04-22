import { Injectable } from 'angular2/core';
import { PONIES } from './mock-ponies';

@Injectable()
export class PoneyService {
    getPonies() {
        return PONIES;
    }

    getPoniesWithPromise() {
        return Promise.resolve(PONIES);
    }
}