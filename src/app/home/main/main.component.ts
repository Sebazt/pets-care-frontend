import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  public goToService():void{
    this.router.navigate(['/aboutServices']);
  }

  public goToPetDayCare():void{
    this.router.navigate(['/petdaycare']);
  }

  public goToPetWalker():void{
    this.router.navigate(['/petwalker']);
  }

  public goToPetGrooming():void{
    this.router.navigate(['/petgrooming']);
  }

}
