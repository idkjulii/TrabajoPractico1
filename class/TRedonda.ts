export class TRedonda implements iTuercaRedonda {
    radio: number;
    constructor(radio: number) {
        this.radio = radio;
    }
    getRadio(): number {
        return this.radio;
    }

}