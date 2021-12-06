class Vehiculo {
  marca: string;
  fecha: string;
  puertas: number;

  constructor(marca: string, fecha: string, puertas: number) {
    this.marca = marca;
    this.fecha = fecha;
    this.puertas = puertas;
  }

  acelerar(): void {
    console.log("acelero");
  }
  frenar(): void {
    console.log("freno");
  }
}

const coche = new Vehiculo("Ford", "2020", 4);
coche.acelerar();
