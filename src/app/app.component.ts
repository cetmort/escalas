import { Component, OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  title = 'segunda-clase-b';
  
  public flag : boolean = true;
  
  public valor : string = ""

  constructor(){

  }
  ngOnInit(){
    this.ocultar();
  }

  public ocultar(){
    let buton = document.getElementById('btn');
    
    buton?.addEventListener("click", () =>{
      //this.flag = !this.flag;
      let grado : HTMLInputElement =  document.getElementById("grados") as HTMLInputElement
    })

  }

}
