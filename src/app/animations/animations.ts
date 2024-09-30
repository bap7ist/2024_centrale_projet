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
