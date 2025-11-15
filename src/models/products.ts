export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    title: "One",
    description: "Short description of product one.",
    price: 10,
    image: "https://picsum.photos/300/200?random=101",
  },
  {
    id: 2,
    title: "Two",
    description: "Short description of product two.",
    price: 15,
    image: "https://picsum.photos/300/200?random=102",
  },
  {
    id: 3,
    title: "Three",
    description: "Short description of product three.",
    price: 20,
    image: "https://picsum.photos/300/200?random=103",
  },
  {
    id: 4,
    title: "Four",
    description: "Short description of product three.",
    price: 25.99,
    image: "https://picsum.photos/300/200?random=104",
  },
  {
    id: 5,
    title: "Five",
    description: "Short description of product three.",
    price: 50,
    image: "https://picsum.photos/300/200?random=105",
  },
];
