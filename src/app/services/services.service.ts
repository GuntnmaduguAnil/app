import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  data:any;

  constructor(private http:HttpClient) { }
  getdata(){
    this.http.get('https://fakestoreapi.com/products')
  }
}
