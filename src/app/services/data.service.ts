import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http
      .get(this.url)
        .pipe(
          map(data => data.json()),
          catchError(this.handleError)
        );
  }

private handleError(error: Response) {
    if (error.status === 404) {
      return throwError('fucked up');
    }
    if (error.status === 400) {
      return throwError('fucked up');
    } else {
      return throwError('fucked up');
    }
  }
}
