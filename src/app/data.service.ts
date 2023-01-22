import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  viewquote(){
    return this.http.get("https://api.quotable.io/random")
  } 
  
  choosequote(tag:any){
    return this.http.get("https://api.quotable.io/random?tags="+tag)
  }

}
