import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const slideFromTop = trigger('slideFromTop', [
  state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
  transition(':enter', [
    animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
  ]),
  transition(':leave', [
    animate(
      '0.5s ease-in',
      style({ transform: 'translateY(-100%)', opacity: 0 })
    ),
  ]),
]);

export const slideInFromLeft = trigger('slideInFromLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate(
      '300ms ease-out',
      style({ transform: 'translateX(0)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    animate(
      '300ms ease-in',
      style({ transform: 'translateX(-100%)', opacity: 0 })
    ),
  ]),
]);

export const slideInFromRight = trigger('slideInFromRight', [
  transition(':enter', [
    // L'élément entre depuis la droite (translateX(100%))
    style({ transform: 'translateX(100%)', opacity: 0 }),
    // L'animation le fait revenir à sa position normale
    animate(
      '300ms ease-out',
      style({ transform: 'translateX(0)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    // L'élément sort vers la droite (translateX(100%))
    animate(
      '300ms ease-in',
      style({ transform: 'translateX(100%)', opacity: 0 })
    ),
  ]),
]);
