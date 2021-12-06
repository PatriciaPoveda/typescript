var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Madre = /** @class */ (function () {
    function Madre(nombre, edad) {
        this.employee = true;
        this._nombre = nombre;
        this._edad = edad;
    }
    Madre.prototype.isEmployee = function (employee) {
        if (employee) {
            console.log("trabajando");
        }
        else {
            console.log("Esta jubilada");
        }
    };
    Madre.prototype.mostrarNombre = function () {
        console.log(this._nombre);
    };
    //SETTERS & GETTERS
    Madre.prototype.getNombre = function () {
        return this._nombre;
    };
    Madre.prototype.setNombre = function (value) {
        this._nombre = value;
    };
    Madre.prototype.getEdad = function () {
        return this._edad;
    };
    Madre.prototype.setEdad = function (value) {
        this._edad = value;
    };
    return Madre;
}());
var Hija = /** @class */ (function (_super) {
    __extends(Hija, _super);
    function Hija(nombre, edad, apellido) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.apellido = apellido;
        return _this;
    }
    Hija.prototype.mostrarNombreHijo = function () {
        console.log(this.getNombre());
    };
    return Hija;
}(Madre));
var hijoMayor = new Hija("Malalu", 50, "Poveda");
hijoMayor.mostrarNombreHijo();
var madre = new Madre("Meyer", 79);
madre.isEmployee(false);
