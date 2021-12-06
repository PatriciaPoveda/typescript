var funcion = function (a, b) {
    return a + b;
};
var suma = funcion(2, 5);
console.log(suma);
var optionalParams = function (name, age) {
    console.log("Mi nombre es " + name + " y mi edad es " + age);
};
optionalParams("Patuka", 37);
var defaultParams = function (name, apellido, user) {
    if (user === void 0) { user = "normal"; }
    return "El nombre es " + name + ", el apellido es " + apellido + " y el ususario es " + user;
};
console.log(defaultParams("Patuka", "Poveda", "premiun"));
console.log(defaultParams("Malalu", "Poveda"));
console.log(defaultParams("Cesar", "Cagiao"));
var desserts = function (dessert) {
    var fruits = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fruits[_i - 1] = arguments[_i];
    }
    console.log("De postre hay " + dessert + " y tenemos " + fruits);
};
desserts("fruta", "naranja", "manzana", "pera");
