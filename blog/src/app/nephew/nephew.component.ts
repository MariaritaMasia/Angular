import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kuma-nephew',
  templateUrl: './nephew.component.html',
  styleUrls: ['./nephew.component.scss']
})
export class NephewComponent implements OnInit {

  @Input() descriptionDegu: string = "";
  @Output() notifyChild: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  notify = () => this.notifyChild.emit("Ho cliccato dentro il nipote");

}
