import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';

@Injectable({
    providedIn: 'root'
  })
  export class DriverService {
  
    private url = 'http://localhost:8080/driver'
  
    constructor(private http: HttpClient) { }
  
    getAll(): Observable<any>{
      return this.http.get(this.url)
    }
  
    add(driver: Driver): Observable<any> {
      return this.http.post(this.url, driver)
    }
  
    delete(id: number): Observable<any> {
      return this.http.post(this.url + '/' + id + '/delete', null)
    }
  
    update(driver: Driver): Observable<any> {
      return this.http.post(this.url + '/' + driver.driver_id + '/update', driver) 
    }
  }