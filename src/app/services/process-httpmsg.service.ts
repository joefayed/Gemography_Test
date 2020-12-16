import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() { }

  // this will handle the error if any from any server request in the application
  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }

    return throwError(errMsg);
  }
}
