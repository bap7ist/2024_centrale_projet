// src/app/auth/auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // L'utilisateur est authentifié, accès autorisé
    } else {
      this.router.navigate(['/connexion']); // Redirige vers la page de connexion
      return false; // Accès refusé
    }
  }
}
