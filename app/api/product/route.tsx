import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { Product } from "@/lib/models/Product";

export async function GET() {
  const productPhotosDirectory = path.join(
    process.cwd(),
    "public/productPhotos"
  );
  const files = fs.readdirSync(productPhotosDirectory);

  const products: Product[] = files.map((file, index) => {
    const name = path.basename(file, path.extname(file));
    const price = Math.round(Math.random() * 100 + 50); // Example price
    const imageUrl = `/productPhotos/${file}`;

    return new Product(index + 1, name, price, imageUrl);
  });

  return NextResponse.json(products);
}
