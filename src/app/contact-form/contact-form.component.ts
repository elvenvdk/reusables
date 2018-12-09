import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods: {} = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Cell' },
    { id: 3, name: 'Home Phone' },
    { id: 3, name: 'Text' }
  ];
  businessContactMethods: {} = [
    { id: 1, name: 'Work Email' },
    { id: 2, name: 'Work Phone' },
    { id: 3, name: 'Work Cell' }
  ];
  firstName = '';
  constructor() {}

  ngOnInit() {}

  log(x) {
    console.log(x);
    event.preventDefault();
  }

  onSubmit(f) {
    console.log(f.value);
  }
}
