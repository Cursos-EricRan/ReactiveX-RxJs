import { Observable, Observer } from 'rxjs';


// Interfaz donde podemos controlar los eventos de las 3 funciones del observable
const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.warn('Error:', err),
    complete: () => console.info('Completed!')
};


const intervalo$ = new Observable<number>( subscriber => {

    // Crear un contador: 1,2,3,4,5,6,...
    let count = 0;
    const interval = setInterval( () => {
        count++;
        subscriber.next(count);
    },1000);

    setTimeout( () => {
        subscriber.complete();
    }, 3000);

    return () => {
        clearInterval(interval);
        console.log('Interval destruido');
    };

});

const sub1 = intervalo$.subscribe(numero => { console.log('Numero:', numero) });
const sub2 = intervalo$.subscribe(numero => { console.log('Numero:', numero) });
const sub3 = intervalo$.subscribe(numero => { console.log('Numero:', numero) });

sub1.add(sub2);
sub1.add(sub3);

setTimeout(() => {
    sub1.unsubscribe();
    // sub2.unsubscribe();
    // sub3.unsubscribe();

    console.log('Completado setTimeout');
}, 5000 );

// ! Ojo => No es lo mismo el sub.complete() al sub.unsubscribe()