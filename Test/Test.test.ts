import {ARedondo} from '../class/ARedondo';
import {TCuadrada} from '../class/TCuadrada';
import {TCuadradoAdapter} from '../class/TCuadradoAdapter';
import {TRedonda} from '../class/TRedonda'; 

test("Test de ARedondo", () => {
    let aRedondo = new ARedondo(5);
    let tRedonda = new TRedonda(5);
    expect(aRedondo.atornillar(tRedonda)).toBe(true);
});


test("Test de ARedondo mal", () => {
    let aRedondo = new ARedondo(5);
    let tRedonda = new TRedonda(8);
    expect(aRedondo.atornillar(tRedonda)).toBe(false);
});

/*test("Test de ARedondo con TCuadrada", () => {
    let aRedondo = new ARedondo(5);
    let tCuadrada = new TCuadrada(10);
    expect(aRedondo.atornillar(tCuadrada)).toBe(true);
});*/

test("Test de ARedondo con TCuadrada", () => {
    let aRedondo = new ARedondo(5);
    let tCuadrada = new TCuadrada(10);
    let tCuadradoAdapter = new TCuadradoAdapter(tCuadrada);
    expect(aRedondo.atornillar(tCuadradoAdapter)).toBe(true);
});
test("Test de ARedondo con TCuadrada falso", () => {
    let aRedondo = new ARedondo(5);
    let tCuadrada = new TCuadrada(11);
    let tCuadradoAdapter = new TCuadradoAdapter(tCuadrada);
    expect(aRedondo.atornillar(tCuadradoAdapter)).toBe(false);
});