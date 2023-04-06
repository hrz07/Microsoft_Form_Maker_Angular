import { Injectable } from '@angular/core';
import { Header } from '../models/header.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {


  header:Header ={
    title : 'united',
    desc: 'desc'
  }
  
  constructor() { }
}
