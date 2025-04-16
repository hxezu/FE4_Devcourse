{
  interface Person {
    name: string;
    age: number;
  }

  interface Car {
    brand: string;
    model: string;
    start(): void;
  }

  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  const employee: Employee = {
    name: "hyeju",
    position: "developer",
  };
  console.log(employee);

  interface Team {
    name: string;
    members: string[];
  }
  const team: Team = {
    name: "my team",
    members: ["kim", "john", "park"],
  };

  console.log(team);

  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const dog: Dog = {
    name: "dog1",
    age: 3,
    breed: "Retriever",
  };
  console.log(dog);

  interface Person2 {
    name: string;
    age: number;
    greet(): string;
  }

  const person2: Person2 = {
    name: "hyeju",
    age: 25,
    greet() {
      return `Hello my name is ${this.name}`;
    },
  };

  console.log(person2.greet());

  interface Shape {
    area(): number;
  }

  interface Circle extends Shape {
    radius: number;
  }

  interface Rectangle extends Shape {
    width: number;
    height: number;
  }

  const circle: Circle = {
    radius: 5,
    area() {
      return Math.PI * this.radius ** 2;
    },
  };
  const rectangle: Rectangle = {
    width: 5,
    height: 3,
    area() {
      return this.width * this.height;
    },
  };

  console.log("Circle : ", circle.area());
  console.log("Rectangle : ", rectangle.area());

  interface Address {
    street: string;
    city: string;
    zipcode: string;
  }

  type Contact2 = Person & Address;

  const contact: Contact2 = {
    name: "hyeju",
    age: 20,
    street: "Seoul",
    city: "Gwangjin",
    zipcode: "04781",
  };

  console.log(contact);

  interface Dictionary {
    [key: string]: string;
  }

  const dict: Dictionary = {
    fruit: "apple",
    vehicle: "car",
  };

  console.log(dict);

  interface Operation {
    (a: number, b: number): number;
  }
  const add: Operation = (a, b) => a + b;
  const subtract: Operation = (a, b) => a - b;
  console.log(add(5, 38));
  console.log(subtract(327, 12));
}

//연습문제 +
{
  interface Animal {
    name: string;
    speak(): string;
  }

  interface Dog extends Animal {
    speak(): string;
  }
  interface Cat extends Animal {
    speak(): string;
  }

  const dog: Dog = {
    name: "dog1",
    speak() {
      return "Woof";
    },
  };
  const cat: Cat = {
    name: "cat1",
    speak() {
      return "Meow!";
    },
  };

  console.log(`${dog.name}, ${dog.speak()}`);
  console.log(`${cat.name}, ${cat.speak()}`);

  interface Company {
    name: string;
    location: string;
    employees: Employee[];
  }

  interface Employee {
    name: string;
    age: number;
    position?: string;
  }

  const company: Company = {
    name: "Apple",
    location: "Cupertino",
    employees: [
      { name: "hyeju", age: 20, position: "Developer" },
      { name: "hyun", age: 26 },
    ],
  };

  console.log(company);

  interface Logger {
    history: string[];
    log(message: string): void;
  }

  const logger: Logger = {
    history: [],
    log(message: string): void {
      console.log(`LOG : ${message}`);
      this.history.push(message);
    },
  };

  logger.log("App started");
  logger.log("User logged in");
  console.log(logger.history);

  interface successResponse {
    status: "success";
    data: string;
  }

  interface errorResponse {
    status: "error";
    error: string;
  }

  type Response = successResponse | errorResponse;

  function handleResponse(res: Response): string {
    if (res.status === "success") return `Success: ${res.data}`;
    else return `Error: ${res.error}`;
  }

  const res1: Response = { status: "success", data: "Hello World" };
  const res2: Response = { status: "error", error: "Error Occurs" };

  console.log(handleResponse(res1));
  console.log(handleResponse(res2));

  interface Book {
    title: string;
    publishedYear: number;
    author: Author;
  }

  interface Author {
    name: string;
    birthYear: number;
  }

  const book: Book = {
    title: "Javascript",
    publishedYear: 2025,
    author: {
      name: "Steve",
      birthYear: 1937,
    },
  };

  console.log(book);

  interface Employee {
    name: string;
    age: number;
  }

  interface Manager extends Employee {
    team: string[];
  }

  interface Developer extends Employee {
    language: string;
  }

  const manager: Manager = {
    name: "Alice",
    age: 35,
    team: ["Bob", "Charlie", "David"],
  };

  const developer: Developer = {
    name: "John",
    age: 28,
    language: "JavaScript",
  };

  console.log(manager);
  console.log(developer);

  interface Database {
    [key: string]: string[];
  }

  const db: Database = {
    users: ["Alice", "Bob", "Charlie"],
    orders: ["order1", "order2"],
  };

  console.log(db.users);
  console.log(db.orders);

  interface User {
    name: string;
    isAdmin: boolean;
    adminCode?: string;
  }

  function createUser(name: string, isAdmin: boolean): User {
    const user: User = {
      name,
      isAdmin,
    };
    if (isAdmin) user.adminCode = "1234";

    return user;
  }

  const admin = createUser("Alice", true);
  const user = createUser("Bob", false);

  console.log(admin);
  console.log(user);

  interface Shape {
    area(): number;
  }

  interface Circle extends Shape {
    radius: number;
  }

  interface Rectangle extends Shape {
    width: number;
    height: number;
  }

  const circle: Circle = {
    radius: 10,
    area() {
      return Math.PI * this.radius ** 2;
    },
  };

  const rectangle: Rectangle = {
    width: 10,
    height: 4,
    area() {
      return this.width * this.height;
    },
  };

  console.log(circle.area());
  console.log(rectangle.area());

  interface Vehicle {
    brand: string;
    model: string;
  }

  interface Electric {
    batteryLife: number;
  }

  interface ElectricCar extends Vehicle, Electric {
    charge(): void;
  }

  const tesla: ElectricCar = {
    brand: "tesla",
    model: "model-y",
    batteryLife: 100,
    charge() {
      console.log("Charging the car");
    },
  };
  tesla.charge();
}
