import { KeysType, ValueType } from "../index";
import { Pair, PairType } from "../Pair/Pair";

interface CustomMapType<K, V> {
  arr: PairType<K, V>[];
  add: (key: K, value: V) => void;
  remove: (key: KeysType<K>) => void;
  get: (key: KeysType<K>) => ValueType<V> | void;
  has: (key: KeysType<K>) => boolean;
}

export class CustomMap<K, V> implements CustomMapType<K, V> {
  arr: PairType<K, V>[];
  constructor() {
    this.arr = [];
  }

  add(key: K, value: V): void {
    if (this.has(key)) {
      console.warn(`You already have pair with key ${key}`);
    } else {
      const item = new Pair<K, V>(key, value);
      this.arr.push(item);
      console.log(`Key: ${key}, Value: ${value} - pair successful created !`);
    }
  }

  remove(key: KeysType<K>): void {
    if (this.has(key)) {
      console.log(`(remove) Pair with key ${key} removed`);
      this.arr = this.arr.filter((item) => item.key !== key);
    } else {
      console.warn(`(remove) Pair with key ${key} doesn't exists`);
    }
  }

  get(key: KeysType<K>): ValueType<V> | void {
    try {
      return this.arr.find((item) => item.key === key).value;
    } catch (ex) {
      console.warn(`(get) Pair with key ${key} doesn't exists`);
    }
  }

  has(key: KeysType<K>): boolean {
    return !!this.arr.find((item) => item.key === key);
  }
}