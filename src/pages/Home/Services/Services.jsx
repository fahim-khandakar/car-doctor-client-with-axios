import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-orange-500">Our Services</h1>
        <h1 className="text-4xl font-bold pt-3">Our Services Area</h1>
        <p className="pt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          veritatis nobis ipsum <br /> quis eaque dignissimos, optio labore
          maiores. Inventore amet non molestiae totam eos ullam laborum dolore
          mollitia! Deleniti, ipsum!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
