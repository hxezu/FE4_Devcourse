//연습 문제
{
  type Person = {
    name: string;
    age: number;
  };

  function getPersonInfo(person: Person): void {
    console.log(`${person.name}, ${person.age}`);
  }

  const person: Person = {
    name: "hyeju",
    age: 25,
  };

  getPersonInfo(person);

  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  function createConfig(host: string, port: number, ssl: boolean): Config {
    return {
      host,
      port,
      ssl,
    };
  }
  const config = createConfig("localhost", 8080, true);
  console.log(config);

  type Rectangle = {
    width: number;
    height: number;
  };

  function calculateArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }

  const rectangle: Rectangle = { width: 10, height: 5 };
  console.log(calculateArea(rectangle));

  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(grades: number[]): number {
    return grades.reduce((a, b) => a + b, 0) / grades.length;
  }
  const student: Student = { name: "hyeju", age: 25, grades: [80, 70, 90] };
  console.log(calculateAverageGrade(student.grades));

  type Response = {
    status: string;
    data: string;
    message: string;
  };

  function createResponse(
    status: string,
    data: string,
    message: string
  ): Response {
    return {
      status,
      data,
      message,
    };
  }
  console.log(createResponse("success", "John", "fetch success"));

  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  function getEmployeeInfo(employee: Employee): string {
    return `${employee.name} works as a ${employee.position} with ID:${employee.id}`;
  }
  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  );

  type Circle = {
    radius: number;
  };
  function calculateCircumference(circle: Circle): number {
    return circle.radius * Math.PI * 2;
  }
  console.log(calculateCircumference({ radius: 3 }));

  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };
  function getDiscountedPrice(product: Product, discount: number): number {
    return (product.price * (100 - discount)) / 100;
  }
  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  );

  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };
  function getBookSummary(book: Book): string {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}`;
  }
  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  );

  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  function isValidTransaction(transaction: Transaction): boolean {
    return transaction.amount > 0 ? true : false;
  }

  const transaction: Transaction = {
    id: "1234",
    amount: -6,
    timestamp: "2025-04-10",
  };
  console.log(isValidTransaction(transaction));
}

//연습문제 +
{
  type Action<T = any> = {
    type: string;
    payload: T;
  };

  function createAction<T>(type: string, payload: T): Action<T> {
    return { type, payload };
  }
  const action1 = createAction("ADD_ITEM", { id: 1, name: "item" });
  const action2 = createAction("UPDATE_ITEM", 42);
  const action3 = createAction("SET_STATUS", "success");

  console.log(action1);
  console.log(action2);
  console.log(action3);

  type NumberOrString = number | string;

  function createObject(
    id: NumberOrString,
    name: string
  ): { id: NumberOrString; name: string } {
    return { id, name };
  }

  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1);
  console.log(object2);

  type Point = {
    x: number;
    y: number;
  };

  function calculateDistance(p1: Point, p2: Point): number {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  }

  const point1: Point = { x: 3, y: 4 };
  const point2: Point = { x: 7, y: 1 };
  console.log(calculateDistance(point1, point2));

  type FetchResult =
    | { status: "loading" }
    | { status: "success"; data: string }
    | { status: "error"; message: string };

  function fetchData(status: string): FetchResult {
    if (status === "loading") return { status: "loading" };
    else if (status === "success")
      return { status: "success", data: "Data loaded successfully!" };
    else return { status: "error", message: "Failed to load data." };
  }

  const result1 = fetchData("loading");
  const result2 = fetchData("success");
  const result3 = fetchData("error");
  console.log(result1);
  console.log(result2);
  console.log(result3);

  type NullOrUndefined = null | undefined;

  function getValue(val: unknown): boolean {
    return val === null || val === undefined ? true : false;
  }
  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1);
  console.log(check2);
  console.log(check3);

  function setCoordinates(x: number, y: number): [number, number] {
    return [x, y];
  }
  const coordinates = setCoordinates(10, 20);
  console.log(coordinates);

  type Person = {
    readonly name: string;
    readonly age: number;
  };

  function createPerson(name: string, age: number): Person {
    return { name, age };
  }

  const person = createPerson("John", 30);
  //person.name = "Jane";
  console.log(person);

  type User = {
    id: string;
    name: string;
    email: string;
  };

  const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
  function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
  }

  const updatedUser1 = updateUser(user1, { name: "Alicia" });
  console.log(updatedUser1);

  type Role = "admin" | "user";
  type UserWithRole = {
    id: string;
    name: string;
    role: Role;
  };
  function assignRole(user: UserWithRole, role1: Role): UserWithRole {
    return { ...user, role: role1 };
  }

  const user2: UserWithRole = { id: "1", name: "Alice", role: "user" };
  const updatedUser = assignRole(user2, "admin");

  console.log(updatedUser);

  type Primitive = string | number;

  function filterString(val: Primitive): string {
    if (typeof val === "string") return val;
    throw new Error("Not a string");
  }
  const stringValue = filterString("Hello");
  console.log(stringValue);

  //const numberValue = filterString(123);
}
