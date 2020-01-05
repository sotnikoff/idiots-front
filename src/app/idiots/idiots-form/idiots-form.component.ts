import { Component, OnInit, Input } from '@angular/core';
import { Idiot } from 'src/app/models/idiot';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idiots-form',
  templateUrl: './idiots-form.component.html',
  styleUrls: ['./idiots-form.component.sass']
})
export class IdiotsFormComponent implements OnInit {

  @Input() idiot: Idiot;

  idiotForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  change(event) {
    console.log(event);
  }

  buildForm(): void {
    this.idiotForm = this.formBuilder.group({
      id: [this.idiot.id],
      name: [this.idiot.name],
      momJoke: [this.idiot.momJoke],
      deathDate: [this.idiot.deathDate],
      aggressive: [this.idiot.aggressive],
      comment: [this.idiot.comment],
      pazientDiagnos: [this.idiot.pazientDiagnos],
      rStarId: [this.idiot.rStarId]
    });
  }

  close() {
    this.router.navigateByUrl('/idiots');
  }

}
