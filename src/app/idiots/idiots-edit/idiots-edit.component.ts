import { Component, OnInit } from '@angular/core';
import { Idiot } from 'src/app/models/idiot';
import { IdiotService } from 'src/app/services/idiot.service';

@Component({
  selector: 'app-idiots-edit',
  templateUrl: './idiots-edit.component.html',
  styleUrls: ['./idiots-edit.component.sass']
})
export class IdiotsEditComponent implements OnInit {

  idiot: Idiot;
  constructor(private idiotService: IdiotService) { }

  ngOnInit() {
    this.idiotService.show(2).subscribe(r => {
      this.idiot = r;
    });
  }

}
