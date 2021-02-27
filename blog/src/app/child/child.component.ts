import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../models/interfaces/pet.interface';

@Component({
  selector: 'kuma-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() listaTopi: Array<Pet> = [];
  @Input() childDescription: string = '';
  @Input() childDescription2: string = '';
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();
  @Output() notifyParent2: EventEmitter<string> = new EventEmitter<string>();

  nephewEvent = "";
  descriptionDegu = "";

  constructor() { }

  ngOnInit(): void {
  }

  notify = () => this.notifyParent.emit("Ho cliccato dentro il figlio");
  notify2 = () => this.notifyParent2.emit("Ho cliccato ancora dentro il figlio");

  assign = (event: string) => this.nephewEvent = event;
  assignDescription = () => {
    setTimeout(() => this.descriptionDegu = "Amore di mamma", 2000);
  }
}
