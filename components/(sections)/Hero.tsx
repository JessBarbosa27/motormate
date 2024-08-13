import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/menMechanic.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to MotorMate</h1>
          <p className="text-xl mb-8">
            Your one-stop shop for all auto parts and services.
          </p>
          <a
            href="/products"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
