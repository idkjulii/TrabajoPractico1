import { TRedonda } from "./TRedonda";

export class ARedondo implements iAgujeroRedondo{
    radio: number;
    constructor(radio: number) {
        this.radio = radio;
    }
    getRadio(): number {
        return this.radio;
    }
    atornillar(T: TRedonda): boolean {
        if (this.radio >= T.getRadio()) {
            return true;
        } else {
            return false;
        }
    }
}