import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Fix } from './app.component';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {}

    /** download all verses */
    getFixes(): Observable<Array<Fix>> {
        return this.http.get<Array<Fix>>('http://localhost:8080/api/fixes');
    }

    /** downlad one by id */
    getFix(add_id: number): Observable<Fix> {
        return this.http.get<Fix>('http://localhost:8080/api/fixes/' + add_id);
    }

    /** add verse */
    addFix(fix: Fix): Observable<Fix> {
        return this.http.post<Fix>('http://localhost:8080/api/fixes', fix);
    }

    /** delete one by id */
    rmFix(rm_id: number) {
        return this.http.delete<Fix>('http://localhost:8080/api/fixes/' + rm_id);
    }

}