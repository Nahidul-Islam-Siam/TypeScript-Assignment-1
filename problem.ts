// ------------------------------
function formatString(input: string, toUpper: boolean = false): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

console.log(formatString("Hello"));       
console.log(formatString("Hello", true));      
console.log(formatString("Hello", false));     



// ----------------------------
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filtered = items.filter(item => item.rating >= 4);
  if (filtered.length < 4) {
    console.log("Less than 4");
  }
  return filtered;
}

const books = [
  { title: "Book A", rating: 3.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4.8 },
  { title: "Book X", rating: 4.9 },
];

console.log(filterByRating(books));

// ------------------------------------
type T = string | number;

function concatenateArrays(...arrays: T[][]): T[] {
  return arrays.reduce((acc, array) => acc.concat(array), []);
}

console.log(concatenateArrays(["a", "b"], ["c"], ["rohim", "karim"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
console.log(concatenateArrays([9, 8], [3, 4], [5]));

// ----------------------------------
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2022, "Camry");
console.log(myCar.getInfo());
console.log(myCar.getModel());

// -------------------------------------
function processValue(value: string | number): number {
  const result = typeof value === "string" ? value.length : value * 2;
  console.log(result);
  return result;
}

processValue("Programming Hero");
processValue(10);

// ----------------------------
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((prev, curr) => (curr.price > prev.price ? curr : prev));
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products)); 
console.log(getMostExpensiveProduct([]));   

// ------------------------------------
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

// ...............................
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject("Negative number not allowed");
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

squareAsync(4)
  .then(result => console.log("Result:", result))
  .catch(error => console.error("Error:", error));

squareAsync(-3)
  .then(result => console.log("Result:", result))
  .catch(error => console.error("Error:", error));
