import { CustomMap } from "./CustomMap/CustomMap";

export type KeysType<T> = T;

export type ValueType<T> = T;

interface City {
  title: string;
  population: number;
}

interface Country {
  capital: City;
  totalArea: number;
}

const moscow: City = {
  title: "Moscow",
  population: 12506468,
};
const minsk: City = {
  title: "Minsk",
  population: 2009786,
};
const russia: Country = {
  capital: moscow,
  totalArea: 12506468,
};
const belarus: Country = {
  capital: minsk,
  totalArea: 207600,
};

const myMap = new CustomMap<number, string>();
const myMap2 = new CustomMap<City, Country>();

myMap.add(1, "first");
myMap.add(2, "second");
myMap.add(3, "third");
myMap.add(1, "first again");
myMap.remove(2);

console.log(myMap.get(1));
console.log(myMap.get(2));
console.log(myMap.get(3));
console.log(myMap.get(4));
console.log(myMap.has(2));

console.log("myMap FINISH", myMap);
console.log("____________________");

myMap2.add(russia.capital, russia);
myMap2.add(belarus.capital, belarus);

console.log(myMap2.get(moscow))
myMap2.remove(moscow);

console.log(myMap2.get(minsk))
console.log(myMap2.get(moscow))
