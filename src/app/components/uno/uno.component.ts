import { Component, OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() { }

  ngOnInit(): void {
  }
    
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  
  ngAfterContentInit(): void{
    console.log("  ngAfterContentInit");
  }

  ngAfterContentChecked(): void{
    console.log(" ngAfterContentChecked");
  }

  ngAfterViewInit(): void{
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log(" ngOnDestroy");
  }

  nameInput(input : any) {
    console.log(input);
  }



}
