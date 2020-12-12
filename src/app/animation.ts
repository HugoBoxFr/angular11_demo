import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
      style({ position: 'relative' }),
      query(':enter, :leave',  [
        style({
          position: 'absolute',
          top: 55,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '-100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    // transition('* <=> DemoPage', [
    //     style({ position: 'relative' }),
    //     query(':enter, :leave', [
    //       style({
    //         position: 'absolute',
    //         top: 55,
    //         left: 0,
    //         width: '100%'
    //       })
    //     ]),
    //     query(':enter', [
    //       style({ left: '100%' })
    //     ]),
    //     query(':leave', animateChild()),
    //     group([
    //       query(':leave', [
    //         animate('300ms ease-out', style({ left: '-100%' }))
    //       ]),
    //       query(':enter', [
    //         animate('300ms ease-out', style({ left: '0%' }))
    //       ])
    //     ]),
    //     query(':enter', animateChild()),
    // ]),
    // transition('* <=> AboutPage', [
    //     style({ position: 'relative' }),
    //     query(':enter, :leave', [
    //       style({
    //         position: 'absolute',
    //         top: 55,
    //         left: 0,
    //         width: '100%'
    //       })
    //     ]),
    //     query(':enter', [
    //       style({ left: '100%' })
    //     ]),
    //     query(':leave', animateChild()),
    //     group([
    //       query(':leave', [
    //         animate('300ms ease-out', style({ left: '-100%' }))
    //       ]),
    //       query(':enter', [
    //         animate('300ms ease-out', style({ left: '0%' }))
    //       ])
    //     ]),
    //     query(':enter', animateChild()),
    // ]),
    // transition('* <=> ContactPage', [
    //     style({ position: 'relative' }),
    //     query(':enter, :leave', [
    //       style({
    //         position: 'absolute',
    //         top: 55,
    //         left: 0,
    //         width: '100%'
    //       })
    //     ]),
    //     query(':enter', [
    //       style({ left: '100%' })
    //     ]),
    //     query(':leave', animateChild()),
    //     group([
    //       query(':leave', [
    //         animate('300ms ease-out', style({ left: '-100%' }))
    //       ]),
    //       query(':enter', [
    //         animate('300ms ease-out', style({ left: '0%' }))
    //       ])
    //     ]),
    //     query(':enter', animateChild()),
    // ]),
]);
