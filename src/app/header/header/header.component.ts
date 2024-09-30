import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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
export class HeaderComponent {
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

  public constructor(private router: Router) {}

  public onBurgerClick(): void {
    this.isOpen = !this.isOpen;
    this.isOpenEmitter.emit(this.isOpen);
  }

  public goToProfile(): void {
    this.router.navigate(['/profile']);
  }
}
