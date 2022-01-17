import { useState, StateUpdater } from "preact/hooks";

export type UseListActionsType<T> = {
  clear: VoidFunction;
  add: (x: T | T[]) => void;
  remove: (x: T) => void;
  toggle: (x: T) => void;
  isAdded: (x: T) => boolean;
  update: StateUpdater<T[]>;
};

export type UseListReturnType<T> = [T[], UseListActionsType<T>];

export type UseListConfigType<T> = {
  defaultItems?: T[];
  comparisonFn?: (a: T, b: T) => boolean;
  updaterFn?: (items: T[], payload: T | T[]) => T[];
};

export function useList<T>({
  defaultItems = [],
  comparisonFn = (a, b) => a === b,
  updaterFn = (items, payload) => {
    if (Array.isArray(payload)) {
      return [...items, ...payload];
    }
    return [...items, payload];
  },
}: UseListConfigType<T>): UseListReturnType<T> {
  const [items, setItems] = useState<T[]>(defaultItems);

  function clear() {
    setItems([]);
  }

  function add(payload: T | T[]) {
    setItems((items) => updaterFn(items, payload));
  }

  function remove(item: T) {
    setItems((items) => items.filter((x) => !comparisonFn(x, item)));
  }

  function isAdded(item: T) {
    return items.some((x) => comparisonFn(x, item));
  }

  function toggle(item: T) {
    isAdded(item) ? remove(item) : add(item);
  }

  return [items, { clear, add, remove, toggle, isAdded, update: setItems }];
}
