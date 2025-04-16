{
  function getFirst<T>(element: T[]): T {
    return element[0];
  }
  console.log(getFirst([1, 2, 3]));
  console.log(getFirst(["a", "b", "c"]));

  function getLength<T>(arr: T[]): number {
    return arr.length;
  }

  console.log(getLength([32, 5, 2, 21, 1]));

  function getLast<T>(arr: T[]): T {
    return arr[arr.length - 1];
  }

  console.log(getLast([1, 2, 3, 4]));
  console.log(getLast(["a", "c", "a", "y"]));

  function getValue<T extends { name: string }>(obj: T): string {
    return obj.name;
  }

  console.log(getValue({ name: "Alice" }));

  function getValue2<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const user = { name: "Alice", age: 30, isAdmin: false };

  console.log(getValue2(user, "name"));

  function isEqual<T>(a: T, b: T): boolean {
    return a === b;
  }
  console.log(isEqual(1, 2));
  console.log(isEqual("a", "a"));

  function square(arr: number[]): number[] {
    return arr.map((num) => num * num);
  }

  console.log(square([1, 2, 3]));

  function getFirstAndLast<T>(arr: T[]): T[] {
    return [arr[0], arr[arr.length - 1]];
  }

  console.log(getFirstAndLast([1, 2, 3]));
  console.log(getFirstAndLast(["a", "b", "c"]));

  function mergeObjects<T>(obj1: T, obj2: T): T {
    return { ...obj1, ...obj2 };
  }
  console.log(mergeObjects({ name: "Alice" }, { age: 25 }));

  function getUnique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }
  console.log(getUnique([1, 2, 2, 3]));
}
