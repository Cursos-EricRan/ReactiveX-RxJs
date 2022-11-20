import { Observable, Observer } from 'rxjs';


// Interfaz donde podemos controlar los eventos de las 3 funciones del observable
const observer: Observer<any> = {
    next: value => console.log('Siguiente [observer]:', value),
    error: err => console.warn('error [observer]:', err),
    complete: () => console.info('[observer] Completed!')
};


// Constante obs$
const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Eric!');

    subscriber.next('Hola');
    subscriber.next('Eric!');

    // Forzamos un error
    // const err = undefined;
    // err.name = 'Eric';

    subscriber.complete();

    // Una vez completado el subscriber lo demás lo ignora
    // Ejemplo: Lo que hay debajo
    subscriber.next('Hola');
    subscriber.next('Eric!');
});

// Forma en la que solo obtienes el resultado de next
// obs$.subscribe(console.log);

// Forma tradicional de llamar al observer con sus 3 funciones
/*obs$.subscribe(
 valor => console.log('next: ' + valor),
 error => console.warn('error:', error),
 () => console.info('Completed!')
 );*/

// Declaro una constante del tipo Observer que es una interfaz donde pongo lo que debe de hacer previamente
// Forma de buenas prácticas para declarar las funciones del observable
obs$.subscribe(observer);

