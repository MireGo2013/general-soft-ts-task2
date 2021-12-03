import { KeysType, ValueType } from "../index";

export interface PairType<K, V>  {
  key: KeysType<K>;
  value: ValueType<V>;
}

export class Pair<K, V> implements PairType<K, V>{
  key: KeysType<K>;
  value: ValueType<V>;

  constructor(key: KeysType<K>, value: ValueType<V>) {
    this.key = key;
    this.value = value;
  }
}
