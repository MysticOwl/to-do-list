import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de tarefas';
  list:any[]=[];
  length: any;

  addTask(item:string){
    if (item != ''){
    this.list.push({
      id:this.length,
      name:item
    })
    }
    else{
      alert("ERROR: Elemento vazio")
    }
  }
  removeTask(index:number){
   if(index >-1){
    this.list.splice(index,1);
   }
  }
}