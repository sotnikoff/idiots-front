import { Component, OnInit } from '@angular/core';
import { Idiot } from 'src/app/models/idiot';
import { IdiotService } from 'src/app/services/idiot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-idiots-delete',
  templateUrl: './idiots-delete.component.html',
  styleUrls: ['./idiots-delete.component.sass']
})
export class IdiotsDeleteComponent implements OnInit {

  idiot: Idiot;
  constructor(private idiotService: IdiotService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(r => {
        return this.idiotService.show(r.id);
      })
    ).subscribe(r => {
      this.idiot = r;
    });
  }

  close(): void {
    this.router.navigateByUrl('/idiots/' + this.idiot.id);
  }

  delete(): void {
    this.idiotService.delete(this.idiot.id).subscribe(r => {
      this.router.navigateByUrl('/idiots');
    });
  }

}
