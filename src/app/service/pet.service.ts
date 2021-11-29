import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root'
})

export class PetService {
  private readonly backendUrl: string;
  constructor(private http: HttpClient) {
    this.backendUrl = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.backendUrl)
      .pipe(map(pets => pets.sort((pet1, pet2) => pet1.name.localeCompare((pet2.name)))));
  }

  addPet(newPet: Pet) {
    return this.http.post(this.backendUrl, newPet)
  }
}
