import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from "../people.service";

@Component({
  selector: 'app-people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
      <a href="#" (click)="selectPerson(person)">
        {{person.name}}
      </a>
    </li>
  </ul>
  <app-person-details [person]="selectedPerson"></app-person-details>

  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  
  people: Person[];
  selectedPerson: Person;

  constructor(private _peopleService: PeopleService) {  }
  
  ngOnInit() {
    this.people = this._peopleService.getAll();
  }
// HERE is the new method
selectPerson(person){
  this.selectedPerson = person;
}
}
