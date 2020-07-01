import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

export const fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
        animate(2000)
    ])
])


export const slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)' }),
        animate(500)
    ]),

    transition(':leave', [
        // animate('5s cubic-bezier(.63,-0.33,1,-0.09)', style({ transform: 'translateX(-100%)' }))
        animate('2s ease-out', keyframes([
            style({
                offset: .6,
                opacity: 1,
                transform: 'translateX(20px)'
            }),
            style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' })
        ]))
    ])
])