import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
private _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) => JSON.stringify(response));
  }
}
