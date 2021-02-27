import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/interfaces/pet.interface';

@Component({
  selector: 'kuma-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {

  @Input() pet: Pet = {} as Pet;
  @Input() index: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
