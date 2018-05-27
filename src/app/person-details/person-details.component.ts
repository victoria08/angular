import { Component, OnInit } from '@angular/core';
import { Person } from "../person";
import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-person-details',
  template: `
    
  <!-- we moved the details template here -->
  <section *ngIf="person">
    <h2>You selected: {{person.name}}</h2>
    <h3>Description</h3>
    <p>
       {{person.name}} weights {{person.weight}} and is {{person.height}} tall.
    </p>
  </section>
  `,
  styles: []
})
export class PersonDetailsComponent {
  person: Person;
  @Input() person : Person;
  
  constructor() { }

  ngOnInit() {
  }

}
