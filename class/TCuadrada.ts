export class TCuadrada implements iTuercaCuadrada {
    ancho: number;

    constructor(ancho: number) {
        this.ancho = ancho;
    }
    getAncho(): number {
        return this.ancho;
    }
}