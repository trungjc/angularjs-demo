import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ConsumerService {

  private messagesURL = 'api/messages';
  constructor(
    private http: HttpClient,

  ) { }

  /** GET messages from the server */
  getMessages (): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesURL);
  }

}
