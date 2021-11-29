import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PetService {
  private readonly backendUrl: string;
  constructor(private http: HttpClient) {
    this.backendUrl = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any> {
    return this.http.get(this.backendUrl);
  }
}
