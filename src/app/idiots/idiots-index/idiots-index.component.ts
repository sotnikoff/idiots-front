import { Component, OnInit, OnDestroy } from '@angular/core';
import { IdiotService } from 'src/app/services/idiot.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-idiots-index',
  templateUrl: './idiots-index.component.html',
  styleUrls: ['./idiots-index.component.sass']
})
export class IdiotsIndexComponent implements OnInit, OnDestroy {

  idiots = [];
  destroySubject$$: Subject<any>;

  constructor(private idiotsService: IdiotService) {
    this.destroySubject$$ = new Subject();
  }

  ngOnInit() {
    this.idiotsService.index().pipe(
      takeUntil(this.destroySubject$$)
    ).subscribe(r => {
      this.idiots = r;
    });
  }

  ngOnDestroy() {
    this.destroySubject$$.next();
    this.destroySubject$$.complete();
  }

}
