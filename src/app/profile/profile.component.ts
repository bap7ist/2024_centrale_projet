import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { combineLatest, finalize, map, switchMap, take, tap } from 'rxjs';
import { User, userRequest } from '../types/user.interface';
import { AuthService } from '../services/auth.service';
import { ReferentielService } from '../services/referentiel.service';
import { Restaurant } from '../types/restaurant.interface';
import { RatingComponent } from '../rating/rating.component';
import { DatePipe } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, RatingComponent, DatePipe, AlertComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;

  public user: User;

  public restaurants: Restaurant[];

  public chargementEnCours: boolean;

  public restaurantsFiltered: Restaurant[];

  public restauChoisis: Restaurant[] = [];

  public detailRestaurant: Restaurant | null = null;

  public enregistrementTermine: boolean;

  public constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private referentielService: ReferentielService
  ) {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      favouriteRestaurants: [[]],
    });
  }

  public ngOnInit(): void {
    combineLatest([
      this.referentielService.getRestaurants(),
      this.userService.getUser(),
    ])
      .pipe(
        tap(([restaurants, user]) => {
          this.user = user;
          this.profileForm.patchValue(user);
          this.restauChoisis = this.user.favoriteRestaurants;
          this.restaurants = restaurants.filter(
            (restaurant) =>
              !this.restauChoisis.some((fav) => fav.id === restaurant.id)
          );
        })
      )
      .subscribe();
  }

  public voirTout(): void {
    this.restaurantsFiltered = structuredClone(this.restaurants);
  }

  public openRestaurant(restau: Restaurant): void {
    this.detailRestaurant = restau;
  }

  public onRestauClick(restau: Restaurant): void {
    this.restauChoisis.push(restau);
    const indexToRemove: number = this.restaurantsFiltered.findIndex(
      (res) => res.name === restau.name
    );
    const indexToRemove2: number = this.restaurants.findIndex(
      (res) => res.name === restau.name
    );
    this.restaurantsFiltered.splice(indexToRemove, 1);
    this.restaurants.splice(indexToRemove2, 1);
  }

  public deleteRestaurant(restau: Restaurant): void {
    const indexToRemove: number = this.restauChoisis.findIndex(
      (res) => res.name === restau.name
    );
    this.restauChoisis.splice(indexToRemove, 1);
    this.restaurants.push(restau);
  }

  public searchRestaurants(value: any): void {
    if (value.target.value === '') {
      this.restaurantsFiltered = [];
    } else {
      this.restaurantsFiltered = this.restaurants.filter((restau) => {
        return restau.name
          .toLowerCase()
          .includes(value?.target?.value.toLowerCase());
      });
    }
  }

  public deconnexion(): void {
    this.authService.logout();
  }

  public enregistrerModifications(): void {
    this.chargementEnCours = true;
    const userRequest: User = {
      firstName: this.profileForm.get('firstName')?.value,
      lastName: this.profileForm.get('lastName')?.value,
      email: this.profileForm.get('email')?.value,
      favoriteRestaurants: this.restauChoisis,
      profilePicture: null,
    };
    this.userService
      .updateUser(userRequest)
      .pipe(
        take(1),
        tap((res) => {
          if (res) {
            this.enregistrementTermine = true;
            setTimeout(() => {
              this.enregistrementTermine = false;
            }, 3000);
          }
        }),
        finalize(() => (this.chargementEnCours = false))
      )
      .subscribe();
  }

  /**
   * MOCK pour ajouter des restaurants à la liste
   */
  public addMultipleRestaurants() {
    const restaus: Restaurant[] = [
      {
        name: 'Le Gourmet',
        adresse: '45 Rue de la Gastronomie',
        note: 4,
        avis: [
          {
            user: 'Alice Dupont',
            date: new Date('2024-10-01T12:00:00Z'),
            com: 'Un excellent repas, les saveurs étaient au rendez-vous !',
            note: 5,
          },
          {
            user: 'Marc Martin',
            date: new Date('2024-10-02T15:30:00Z'),
            com: 'Bon restaurant, mais le service était un peu lent.',
            note: 4,
          },
        ],
        id: 0,
      },
      {
        name: 'Pizza Paradise',
        adresse: '78 Avenue des Pizzas',
        note: 2,
        avis: [
          {
            user: 'Sophie Tremblay',
            date: new Date('2024-09-29T09:15:00Z'),
            com: 'La pizza était trop cuite et le goût manquait de finesse.',
            note: 1,
          },
          {
            user: 'Jean Dupuis',
            date: new Date('2024-09-30T20:45:00Z'),
            com: 'Pas terrible, j’ai eu une mauvaise expérience. Je ne reviendrai pas.',
            note: 2,
          },
        ],
        id: 0,
      },
      {
        name: 'Sushi World',
        adresse: '23 Boulevard du Sushi',
        note: 5,
        avis: [
          {
            user: 'Claire Robert',
            date: new Date('2024-10-01T18:30:00Z'),
            com: 'Les meilleurs sushis que j’ai jamais mangés !',
            note: 5,
          },
          {
            user: 'Paul Bernard',
            date: new Date('2024-10-02T14:00:00Z'),
            com: 'Un délice ! Les ingrédients sont frais et savoureux.',
            note: 5,
          },
          {
            user: 'Lucie Dubois',
            date: new Date('2024-10-01T11:00:00Z'),
            com: 'Service rapide et ambiance agréable.',
            note: 4,
          },
        ],
        id: 0,
      },
      {
        name: 'La Boulangerie',
        adresse: '12 Rue des Pains',
        note: 3,
        avis: [
          {
            user: 'Thomas Lefevre',
            date: new Date('2024-09-28T10:30:00Z'),
            com: 'Le pain était bon, mais les pâtisseries étaient un peu sèches.',
            note: 3,
          },
          {
            user: 'Emma Lemoine',
            date: new Date('2024-09-29T16:45:00Z'),
            com: 'Correct, mais rien d’exceptionnel.',
            note: 3,
          },
          {
            user: 'Léo Girard',
            date: new Date('2024-09-30T09:00:00Z'),
            com: 'Une bonne boulangerie pour le quotidien.',
            note: 3,
          },
        ],
        id: 0,
      },
      {
        name: 'Burger Express',
        adresse: '34 Route des Burgers',
        note: 4,
        avis: [
          {
            user: 'Jules Moreau',
            date: new Date('2024-09-30T12:00:00Z'),
            com: 'De bons burgers, bien garnis et savoureux !',
            note: 5,
          },
          {
            user: 'Anaïs Dubois',
            date: new Date('2024-10-01T13:30:00Z'),
            com: 'Rapide et bon, parfait pour un déjeuner.',
            note: 4,
          },
          {
            user: 'Julien Laurent',
            date: new Date('2024-10-02T17:00:00Z'),
            com: 'Les frites étaient un peu trop grasses, mais le burger était excellent.',
            note: 3,
          },
        ],
        id: 0,
      },
    ];

    this.referentielService.addMultipleRestaurants(restaus).subscribe();
  }
}
