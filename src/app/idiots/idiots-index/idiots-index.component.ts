import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idiots-index',
  templateUrl: './idiots-index.component.html',
  styleUrls: ['./idiots-index.component.sass']
})
export class IdiotsIndexComponent implements OnInit {

  idiots = [
    { id: 1, name: 'Idiot 1', rockId: 1234567 },
    { id: 2, name: 'Idiot 2', rockId: 1234567 },
    { id: 3, name: 'Idiot 3', rockId: 1234567 },
    { id: 4, name: 'Idiot 4', rockId: 1234567 },
    { id: 5, name: 'Idiot 5', rockId: 1234567 },
    { id: 6, name: 'Idiot 6', rockId: 1234567 },
    { id: 7, name: 'Idiot 7', rockId: 1234567 },
    { id: 8, name: 'Idiot 8', rockId: 1234567 },
    { id: 9, name: 'Idiot 9', rockId: 1234567 },
    { id: 10, name: 'Idiot 10', rockId: 1234567 },
    { id: 11, name: 'Idiot 11', rockId: 1234567 },
    { id: 12, name: 'Idiot 12', rockId: 1234567 },
    { id: 13, name: 'Idiot 13', rockId: 1234567 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
