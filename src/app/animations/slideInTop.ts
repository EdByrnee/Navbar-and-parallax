import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInTop =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInTop', [
 
        // route 'enter' transition
        transition('void => *', [

            // css styles at start of transition
            style({ opacity: 0 }),
 
            // animation and styles at end of transition
            animate('.5s .3s', style({ opacity: 1 }))
        ])
    ]);