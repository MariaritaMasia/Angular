import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/interfaces/pet.interface';

@Component({
  selector: 'kuma-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  @Input() petsList: Array<Pet> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
