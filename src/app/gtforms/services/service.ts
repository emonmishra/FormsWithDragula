import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RecordType } from '../models';

@Injectable()
export class GtFormsService {
  private API_BASE: string = 'https://empinfo.apispark.net/v1';
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Authorization', "Basic " + btoa('e2d253d6-f563-4eba-acc4-947f3f415a3e' + ':' + '31a0f5ea-41e2-4623-9b5e-7f30f1a09683'));
  }

  getRecordTypes(): Observable<RecordType[]> {
    return this.http.get(this.API_BASE + "/recordTypes/", {headers: this.headers} )
      .map(res => res.json());
  }

}
