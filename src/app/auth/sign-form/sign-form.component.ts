import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.sass']
})
export class SignFormComponent implements OnInit {

  authForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: [null],
      password: [null]
    });
  }

}
