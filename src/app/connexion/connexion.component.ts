import { Component, OnInit } from '@angular/core';
import { InscriptionSuccess } from '../types/inscriptionSuccess.interface';
import { SuccessService } from '../services/success.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss',
})
export class ConnexionComponent implements OnInit {
  public succesInscription: InscriptionSuccess | null;

  public loginForm: FormGroup;

  public constructor(
    private successService: SuccessService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public ngOnInit(): void {
    this.succesInscription = this.successService.getInscriptionData();

    if (this.succesInscription) {
      this.loginForm.get('email')?.setValue(this.succesInscription.email);
    }
  }

  public connexion(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService
        .login(email, password)
        .pipe(
          tap((res) => {
            this.authService.saveToken(res.token.access_token);
            this.router.navigate(['/profile']).then(() => {
              window.location.reload();
            });
          })
        )
        .subscribe();
    }
  }
}
