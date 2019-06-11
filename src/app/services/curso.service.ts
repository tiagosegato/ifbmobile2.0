import { map } from 'rxjs/operators';
import { Curso } from './../interfaces/curso';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
}) 
export class CursoService {
  public cursoCollection: AngularFirestoreCollection<Curso>;

  constructor(public afs: AngularFirestore) {
    this.cursoCollection = this.afs.collection<Curso>('cursos');
  }

  getCursos() {
    return this.cursoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    )
  }

  getCurso(id: string) { return this.cursoCollection.doc<Curso>(id).valueChanges(); }
}
