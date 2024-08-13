import fs from "fs";
import path from "path";
import { Product } from "../lib/models/Product";

// Get the path to the public directory
const productPhotosDirectory = path.join(process.cwd(), "public/productPhotos");

// Function to read images and create products
export const getProducts = (): Product[] => {
  // Read all files from the directory
  const files = fs.readdirSync(productPhotosDirectory);

  // Create a Product array
  return files.map((file, index) => {
    const name = path.basename(file, path.extname(file)); // Extract file name without extension
    const price = Math.round(Math.random() * 100 + 50); // Random price for example
    const imageUrl = `/productPhotos/${file}`;

    return new Product(index + 1, name, price, imageUrl);
  });
};
