
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: string;
  stock: number;
};

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("/items/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }
        return response.json();
      })
      .then((result) => {
        setProducts(result.data);
        setStatus("Connected to Directus!");
      })
      .catch((error) => {
        setStatus("Error: " + error.message);
      });
  }, []);

  return (
    <div style={{ padding: "30px", color: "black" }}>
      <h1>Products from Directus</h1>
      <p>{status}</p>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price} €</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
}
