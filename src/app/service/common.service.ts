import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http : HttpClient) { }

  register(userData){
    return this._http.post<any>("http://localhost:3000/users", userData)
  }

  validateUser(data){
    return this._http.get<any>("http://localhost:3000/users", data)
  }

  createUsers(userData){
    return this._http.post<any>("http://localhost:3000/create", userData)
  }

  getUsers(){
    return this._http.get<any>("http://localhost:3000/create");
  }
}
