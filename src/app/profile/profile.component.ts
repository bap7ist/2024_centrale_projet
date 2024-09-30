import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs';
import { User } from '../types/user.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;

  public user: User;

  public constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      favouriteRestaurants: [[]],
    });
  }

  public ngOnInit(): void {
    this.loadUserProfile();
  }

  private loadUserProfile(): void {
    this.userService
      .getUser()
      .pipe(
        tap((user) => {
          this.user = user;
          this.profileForm.patchValue(user);
        })
      )
      .subscribe();
  }

  public deconnexion(): void {
    this.authService.logout();
  }
}
