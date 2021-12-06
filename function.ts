const funcion = (a: number, b: number): number => {
  return a + b;
};
const suma: number = funcion(2, 5);

console.log(suma);

const optionalParams = (name: string, age?: number): void => {
  console.log(`Mi nombre es ${name} y mi edad es ${age}`);
};

optionalParams("Patuka", 37);

const defaultParams = (
  name: string,
  apellido: string,
  user: string = "normal"
): string => {
  return `El nombre es ${name}, el apellido es ${apellido} y el ususario es ${user}`;
};

console.log(defaultParams("Patuka", "Poveda", "premiun"));
console.log(defaultParams("Malalu", "Poveda"));
console.log(defaultParams("Cesar", "Cagiao"));

const desserts = (dessert: string, ...fruits: string[]): void => {
  console.log(`De postre hay ${dessert} y tenemos ${fruits}`);
};
desserts("fruta", "naranja", " manzana", " pera");
