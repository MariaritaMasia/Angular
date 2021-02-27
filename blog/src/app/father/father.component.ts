import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/interfaces/pet.interface';

@Component({
  selector: 'kuma-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  childEvent = "";
  childEvent2 = "";
  listaTopi: Array<Pet> = [
    { name: "Java", age: 2, race: "Hamster", color: "White and Orange", image: "hamster" },
    { name: "Drugo", age: 1, race: "Degu", color: "Brown", image: "degu" },
    { name: "Papu", age: 1, race: "Guinea Pig", color: "Golden", image: "pig" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  assign = (event: string) => this.childEvent = event;

}
