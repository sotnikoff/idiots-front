import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fire: AngularFireAuth) { }

  registration(email: string, password: string) {
    return from(this.fire.auth.createUserWithEmailAndPassword(email, password));
  }
}
