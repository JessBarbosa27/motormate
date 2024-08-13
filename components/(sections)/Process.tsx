import React from "react";

const Process: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4">Step 1</h3>
            <p>Choose your parts and accessories online.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4">Step 2</h3>
            <p>Book an appointment for installation or service.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4">Step 3</h3>
            <p>Get your vehicle serviced and drive away happy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
