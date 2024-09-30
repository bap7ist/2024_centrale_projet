import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs';
import { UserService } from '../../services/user.service';

export interface boutonHeader {
  id: number;
  name: string;
  url: string[];
  isDark: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Output() public isOpenEmitter = new EventEmitter<boolean>();

  public isOpen: boolean = false;

  public userLetters: string;

  public boutonsHeader: boutonHeader[] = [
    {
      id: 0,
      name: 'Inscription',
      url: ['/inscription'],
      isDark: true,
    },
    {
      id: 1,
      name: 'Connexion',
      url: ['/connexion'],
      isDark: false,
    },
  ];

  public isConnected: boolean = false;

  public constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.isConnected = this.authService.isAuthenticated();

    if (this.isConnected) {
      this.userService
        .getUser()
        .pipe(
          tap((user) => {
            this.userLetters = user.firstName[0] + user.lastName[0];
          })
        )
        .subscribe();
    }
  }

  public onBurgerClick(): void {
    this.isOpen = !this.isOpen;
    this.isOpenEmitter.emit(this.isOpen);
  }

  public goToProfile(): void {
    this.router.navigate(['/profile']);
  }
}
