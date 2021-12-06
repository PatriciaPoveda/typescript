interface Trabajo {
  //trabajo: string;
  employee: boolean;

  isEmployee(employee: boolean): void;
}

class Madre implements Trabajo {
  protected _nombre: string;

  protected _edad: number;

  constructor(nombre: string, edad: number) {
    this._nombre = nombre;
    this._edad = edad;
  }
  employee: boolean = true;
  isEmployee(employee: boolean): void {
    if (employee) {
      console.log("trabajando");
    } else {
      console.log("Esta jubilada");
    }
  }
  public mostrarNombre(): void {
    console.log(this._nombre);
  }
  //SETTERS & GETTERS
  public getNombre(): string {
    return this._nombre;
  }
  public setNombre(value: string) {
    this._nombre = value;
  }
  public getEdad(): number {
    return this._edad;
  }
  public setEdad(value: number) {
    this._edad = value;
  }
}

class Hija extends Madre {
  apellido: string;

  constructor(nombre: string, edad: number, apellido: string) {
    super(nombre, edad);
    this.apellido = apellido;
  }
  mostrarNombreHijo(): void {
    console.log(this.getNombre());
  }
}

const hijoMayor = new Hija("Malalu", 50, "Poveda");

hijoMayor.mostrarNombreHijo();
const madre = new Madre("Meyer", 79);
madre.isEmployee(false);
