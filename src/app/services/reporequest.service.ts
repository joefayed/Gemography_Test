import { Injectable } from '@angular/core';
import { Repo } from "../shared/repo";
import { Total } from "../shared/total";
import { Observable} from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class ReporequestService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHttpmsgService) { }
    // Function to return request a list of reppos from the api and 
    // return it to the user from anywhere inside the app, 
    // will return the recieved error if something happened after being handeled by the msgservice created
    getRepos(): Observable<Total[]> {
    return this.http.get<Total[]>(baseURL).pipe(catchError(this.processHTTPMsgService.handleError));
  }
}