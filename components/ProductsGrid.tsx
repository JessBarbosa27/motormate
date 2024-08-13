import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductsGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productImages = [
        {
          id: 1,
          name: "Oil Kit",
          price: 99.99,
          imageUrl: "/productPhotos/product1.jpg",
        },
        {
          id: 2,
          name: "Engine Oil",
          price: 129.99,
          imageUrl: "/productPhotos/engineOil.jpg",
        },
        {
          id: 3,
          name: "Coolant",
          price: 129.99,
          imageUrl: "/productPhotos/coolant.jpeg",
        },
        {
          id: 4,
          name: "Bulb",
          price: 129.99,
          imageUrl: "/productPhotos/windShieldWash.jpg",
        },
        {
          id: 5,
          name: "Bulb",
          price: 129.99,
          imageUrl: "/productPhotos/littleTreeCarFreshner.jpg",
        },
      ];
      setProducts(productImages);
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 bg-gray-700">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
