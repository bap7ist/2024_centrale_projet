import { Component } from '@angular/core';
import { User } from '../types/user.interface';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { slideFromTop } from '../animations/animations';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss',
  animations: [slideFromTop],
})
export class InscriptionComponent {
  public inscriptionForm: FormGroup;

  public chargementEnCours: boolean = false;

  public inscriptionError: Error;

  public allUsers: User[] = [];

  constructor(private fb: FormBuilder) {
    this.inscriptionForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public inscription(): void {}
}
