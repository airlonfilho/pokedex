import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  protected headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
  protected base_url = 'https://pokeapi.co/api/v2/'

  constructor(public httpClient: HttpClient) { }

  public detailPokemon(id: any): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.base_url}/pokemon/${id}`, {
      headers: this.headers
    });
  }

  public typePokemon(type: any): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.base_url}/type/${type}`, {
      headers: this.headers
    });
  }

  public searchPokemon(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.base_url}/pokemon/${name}`, {
      headers: this.headers
    });
  }
}
