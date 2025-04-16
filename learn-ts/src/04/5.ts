{
  type Status = "Error" | "Success";
  interface ProductItem {
    id: number;
    name: string;
    price: number;
    status?: Status;
  }

  type Product = {
    name: string;
    items: ProductItem[];
  };

  const product1: Product = {
    name: "TV",
    items: [
      {
        id: 1,
        name: "LG OLED",
        price: 1000,
      },
    ],
  };
}
