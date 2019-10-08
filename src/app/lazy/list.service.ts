import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from './users';


@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http: HttpClient) {}
  // request to server
  public getData(): Observable<{data: Users[]}> {
    return this.http.get( 'https://reqres.in/api/users?page=2') as Observable<{data: Users[]}>;
  }
}
