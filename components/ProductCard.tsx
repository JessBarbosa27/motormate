import React from "react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-md">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold  text-gray-700 mb-2">
        {product.name}
      </h3>
      <p className="text-lg font-medium text-gray-700">${product.price}</p>
    </div>
  );
};

export default ProductCard;
