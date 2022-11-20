import { Observable, Observer, Subject } from 'rxjs';


// Interfaz donde podemos controlar los eventos de las 3 funciones del observable
const observer: Observer<any> = {
    next: value => console.log('Next:', value),
    error: err => console.warn('Error:', err),
    complete: () => console.info('Completed!')
};

