var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, fecha, puertas) {
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log("acelero");
    };
    Vehiculo.prototype.frenar = function () {
        console.log("freno");
    };
    return Vehiculo;
}());
var coche = new Vehiculo("Ford", "2020", 4);
coche.acelerar();
