export class Equipo {
    constructor(
        public idEquipo: number,
        public nombre: string,
        public imagen: string,
        public champions: number,
        public web: string,
        public descripcion: string,
        public finalista: number
    ) { }
}