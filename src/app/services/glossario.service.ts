import { map } from 'rxjs/operators';
import { Glossario } from './../interfaces/glossario';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GlossarioService {
  public glossarioCollection: AngularFirestoreCollection<Glossario>;

  constructor(public afs: AngularFirestore) {
    this.glossarioCollection = this.afs.collection<Glossario>('glossario');
  }

  getGlossarios() {
    return this.glossarioCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    )
  }

  getGlossario(id: string) { return this.glossarioCollection.doc<Glossario>(id).valueChanges(); }
}
