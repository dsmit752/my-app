import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({

  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'] //scss

})

export class LoginFormComponent implements OnInit {

  form: FormGroup = new FormGroup({

    username: new FormControl(''),

    password: new FormControl(''),

  });

  submit() {

    if (this.form.valid) {

      this.submitEM.emit(this.form.value);

    }

  }

  @Input() error!: string | null;

  @Output() submitEM = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

}