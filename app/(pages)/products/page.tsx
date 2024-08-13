"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsGrid from "@/components/ProductsGrid";

const Products: React.FC = () => {
  return (
    <>
      <Navbar position="fixed" bgColor="black" backdropBlur={false} />
      <div className="pt-16">
        {" "}
        <section
          className="relative h-64 bg-cover bg-center flex items-center justify-center text-white"
          style={{
            backgroundImage: `url('/wheelBg.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="text-4xl font-bold relative z-10">Products</h1>
        </section>
        <ProductsGrid />
        <Footer />
      </div>
    </>
  );
};

export default Products;
