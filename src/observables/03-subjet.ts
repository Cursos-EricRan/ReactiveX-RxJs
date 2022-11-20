import { Observable, Observer, Subject } from 'rxjs';


// Interfaz donde podemos controlar los eventos de las 3 funciones del observable
const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.warn('Error:', err),
    complete: () => console.info('Completed!')
};

const interval$ = new Observable(subscriber => {
    const intervalID = setInterval(() =>
        subscriber.next(Math.random().toFixed(4))
        , 5000);

    return () => clearInterval(intervalID);
});

/***
 * 1. Casteo múltiple
 * 2. También es un observer
 * 3. Next, error y complete
 * */
const subject$ = new Subject();
interval$.subscribe(subject$);

const sub1 = subject$.subscribe(rnd => console.log('sub1:', rnd));
const sub2 = subject$.subscribe(rnd => console.log('sub2:', rnd));

setTimeout( () => {
    sub1.unsubscribe();
    sub2.unsubscribe();

    console.log('Completado setTimeout');
}, 11000);