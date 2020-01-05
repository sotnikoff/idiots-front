import { Component, OnInit } from '@angular/core';
import { Idiot } from 'src/app/models/idiot';
import { IdiotService } from 'src/app/services/idiot.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-idiots-edit',
  templateUrl: './idiots-edit.component.html',
  styleUrls: ['./idiots-edit.component.sass']
})
export class IdiotsEditComponent implements OnInit {

  idiot: Idiot;
  constructor(private idiotService: IdiotService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(switchMap(r => {
      return this.idiotService.show(r.id);
    })).subscribe(r => {
      this.idiot = r;
    }).unsubscribe();
  }

}
