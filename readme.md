# Assignment: `interface`, `type`, and `keyof` in TypeScript (Short Version)

## Q1: Differences Between `interface` and `type`

Both `interface` and `type` describe object shapes, but they have key differences:

### Interface:

* Best for defining object or class structure.
* Can be extended with `extends`.
* Supports declaration merging.

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}
```

### Type:

* More flexible (can define unions, primitives, tuples, etc.).
* Cannot be merged after declaration.

```ts
type ID = string | number;
type Person = {
  name: string;
  age: number;
};
```

| Feature               | Interface | Type Alias |
| --------------------- | --------- | ---------- |
| Extendable            | Yes       | Yes        |
| Merging               | Yes       | No         |
| Works with primitives | No        | Yes        |

**Tip:** Use `interface` for objects, and `type` for advanced types.

---

## Q2: Use of `keyof` in TypeScript

The `keyof` keyword creates a union of property names from a type.

```ts
type Car = {
  brand: string;
  year: number;
};

// Result: "brand" | "year"
type CarKeys = keyof Car;
```

### Example Function:

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const car = { brand: "Toyota", year: 2022 };
console.log(getProperty(car, "brand")); // Toyota
```

**Conclusion:** `keyof` helps write safer, flexible code by enforcing valid property keys.

---

**Summary:**

* Use `interface` for structured objects and extendability.
* Use `type` for complex or union types.
* Use `keyof` to reference property names safely and dynamically.
