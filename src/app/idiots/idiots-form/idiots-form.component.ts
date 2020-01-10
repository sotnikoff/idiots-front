import { Component, OnInit, Input } from '@angular/core';
import { Idiot } from 'src/app/models/idiot';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IdiotService } from 'src/app/services/idiot.service';

@Component({
  selector: 'app-idiots-form',
  templateUrl: './idiots-form.component.html',
  styleUrls: ['./idiots-form.component.sass']
})
export class IdiotsFormComponent implements OnInit {

  @Input() idiot: Idiot;

  idiotForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private idiotService: IdiotService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.idiotForm = this.formBuilder.group({
      name: [this.idiot.name, Validators.required],
      momJoke: [this.idiot.momJoke],
      deathDate: [this.idiot.deathDate],
      aggressive: [this.idiot.aggressive],
      comment: [this.idiot.comment],
      pazientDiagnos: [this.idiot.pazientDiagnos],
      rStarId: [this.idiot.rStarId]
    });
  }

  save(): void {
    if (!this.idiotForm.valid) {
      return;
    }

    const savedIdiot = Object.assign({ id: this.idiot.id }, this.idiotForm.getRawValue());
    this.idiotService.save(savedIdiot).subscribe(r => {
      this.router.navigateByUrl(`/idiots/${r.id}`);
    });
  }

  close(): void {
    this.router.navigateByUrl('/idiots');
  }

}
