import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/interfaces/pet.interface';

@Component({
  selector: 'kuma-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  petsList: Array<Pet> = [
    { name: "Java", age: 2, race: "Hamster", color: "White and Orange", image: "hamster", description: "Criceto dorato" },
    { name: "Drugo", age: 1, race: "Degu", color: "Brown", image: "degu", description: "Degu del Cile" },
    { name: "Papu", age: 1, race: "Guinea Pig", color: "Golden", image: "pig", description: "Porcellino d'India" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
