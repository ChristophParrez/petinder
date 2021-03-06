import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, mergeMap, Observable } from "rxjs";
import { Pet } from "../model/Pet";

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

  getPetByName(name: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.backendUrl}/${name}`);
  }

  addPet(newPet: Pet): Observable<Object> {
    console.log(newPet);
    return this.http.post(this.backendUrl, newPet);
  }

  deletePet(petId: number): Observable<Object> {
    return this.http.delete(`${this.backendUrl}/${petId}`);
  }

  sendText(text: string, pet: Pet): Observable<Object> {
    return this.http.post(`${this.backendUrl}/sendText`, text)
      .pipe(mergeMap(() => this.http.get(`${this.backendUrl}/${pet.name}/incrementPopularity`)));
  }
}
