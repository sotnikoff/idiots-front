import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idiots-index',
  templateUrl: './idiots-index.component.html',
  styleUrls: ['./idiots-index.component.sass']
})
export class IdiotsIndexComponent implements OnInit {

  idiots = [
    { name: 'Idiot 1', rockId: 1234567 },
    { name: 'Idiot 2', rockId: 1234567 },
    { name: 'Idiot 3', rockId: 1234567 },
    { name: 'Idiot 4', rockId: 1234567 },
    { name: 'Idiot 5', rockId: 1234567 },
    { name: 'Idiot 6', rockId: 1234567 },
    { name: 'Idiot 7', rockId: 1234567 },
    { name: 'Idiot 8', rockId: 1234567 },
    { name: 'Idiot 9', rockId: 1234567 },
    { name: 'Idiot 10', rockId: 1234567 },
    { name: 'Idiot 11', rockId: 1234567 },
    { name: 'Idiot 12', rockId: 1234567 },
    { name: 'Idiot 13', rockId: 1234567 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
