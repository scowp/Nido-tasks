import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public tarefa: string = ""
  public items = ["Exemplo"]
  public form = document.getElementById("#form")

  addTarefa(){
    this.items.push(this.tarefa)
  }

  removeTarefa(item: string){
    this.items.splice( this.items.indexOf(item), 1 )
  }

  constructor() { }

  ngOnInit(): void {
  }

}
