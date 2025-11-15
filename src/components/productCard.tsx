import { useCart } from "../hook/useCart";
import type { IProduct } from "../models/products";

interface Props {
  product: IProduct;
}

export default function ProductCard({ product }: Props): React.JSX.Element {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center bg-white">
      <img src={product.image} alt={product.title} className="mb-4 rounded" />
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-blue-600 font-semibold mb-4">${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
