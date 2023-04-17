import { TCuadrada } from "./TCuadrada";
import { TRedonda } from "./TRedonda";

export class TCuadradoAdapter extends TRedonda{
    private cuadrado: TCuadrada;
    constructor(cuadrado: TCuadrada) {
        super(0);
        this.cuadrado = cuadrado;
    }
    getRadio(): number {
        return this.cuadrado.getAncho() / 2;
    }
}