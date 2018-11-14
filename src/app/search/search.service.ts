import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  authorization = 'Bearer _pCZ-eBwvuXGgg3TcgM5yKRx2LdE4QNLLbGQurjsyYDdY2B_tOGztHjuPfrawx_1E4Ftelc-FcINkZHbCXfbxQ4kUNhiejC437uiMHkKlkvIKA8xeaLwaM8U-zLrW3Yx'
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": this.authorization
    })
  };

  getData(cities, states, prices) {
    let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${cities}+${states}&price=${prices}&open_now=true`
    return this.http.get(url, this.httpOptions)
  }

  // getBusiness(id) {
  //   let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`
  //   return this.http.get(url, this.httpOptions)
  // }
}
