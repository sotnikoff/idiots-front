import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Idiot } from '../models/idiot';

@Injectable({
  providedIn: 'root'
})
export class IdiotService {

  constructor() { }

  show(id: number) {
    const idiot = new Idiot();
    idiot.comment = 'asdasd';
    idiot.deathDate = '2020-01-05';
    idiot.momJoke = 'medium';
    idiot.pazientDiagnos = 'asdasdd';
    idiot.rStarId = 13123123;
    idiot.aggressive = true;
    idiot.name = 'Name';
    idiot.id = id;
    return of(idiot);
  }
}
