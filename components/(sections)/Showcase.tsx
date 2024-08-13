"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../lib/models/Product";

const Showcase: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch products from the API route
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="py-16 bg-black ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8  text-white">
          Product Showcase
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg bg-white">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
