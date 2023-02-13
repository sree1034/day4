import { Injectable } from '@angular/core';
import { districts } from 'src/assets/data/data';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { single } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
constructor(){

}
getData(){
  return districts
}
}
