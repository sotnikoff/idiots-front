import { Injectable } from '@angular/core';
import { Idiot } from '../models/idiot';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import pick from 'lodash/pick';

@Injectable({
  providedIn: 'root'
})
export class IdiotService {

  permittedAttributes = [
    'name', 'deathDate', 'rStarId', 'pazientDiagnos', 'comment', 'aggressive', 'momJoke'
  ];
  constructor(private fire: AngularFirestore) {
  }

  show(id: string) {
    return this.fire.collection('idiots').doc(id).snapshotChanges().pipe(
      map(res => {
        const idiot = new Idiot();
        Object.assign(idiot, res.payload.data());
        idiot.id = res.payload.id;
        return idiot;
      })
    );
  }

  index() {
    return this.fire.collection('idiots').snapshotChanges().pipe(
      map((r: any) => {
        return r.map((res: any) => {
          const idiot = new Idiot();
          Object.assign(idiot, res.payload.doc.data());
          idiot.id = res.payload.doc.id;
          return idiot;
        });
      })
    );
  }

  save(record: Idiot): any {

    if (!record.id) {
      return from(this.fire.collection('idiots').doc(record.id).set(pick(record, this.permittedAttributes)));
    }
    return from(this.fire.collection('idiots').add(record));
  }
}
