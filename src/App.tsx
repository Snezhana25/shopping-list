import { CartProvider } from "./context/сartContext";
import ProductList from "./components/productList";
import { products } from "./models/products";
import CartModal from "./components/сartModal";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <CartModal />
        <header className="p-4 text-center font-bold text-2xl">My Shop</header>

        <ProductList products={products} />
      </div>
    </CartProvider>
  );
}
