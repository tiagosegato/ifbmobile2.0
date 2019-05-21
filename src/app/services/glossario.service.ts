import { map } from 'rxjs/operators';
import { Glossario } from './../interfaces/glossario';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlossarioService {
  private glossarioCollection: AngularFirestoreCollection<Glossario>;

  constructor(private afs: AngularFirestore) {
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
