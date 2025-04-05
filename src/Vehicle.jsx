import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Vehicle.module.css";

const brands = [
  { name: "Alfa Romeo", logo: "/alfa-romeo.png" },
  { name: "Audi", logo: "/audi.png" },
  { name: "BMW", logo: "/bmw.png" },
  { name: "Chevrolet", logo: "/chevrolet.png" },
  { name: "Chrysler", logo: "/chrysler.png" },
  { name: "Citroën", logo: "/citroen.png" },
  { name: "Dacia", logo: "/dacia.png" },
  { name: "Daewoo", logo: "/daewoo.png" },
  { name: "Daihatsu", logo: "/daihatsu.png" },
  { name: "Fiat", logo: "/fiat.png" },
  { name: "Ford", logo: "/ford.png" },
  { name: "Honda", logo: "/honda.png" },
  { name: "Hyundai", logo: "/hyundai.png" },
  { name: "Isuzu", logo: "/isuzu.png" },
  { name: "Iveco", logo: "/iveco.png" },
  { name: "Jaguar", logo: "/jaguar.png" },
  { name: "Jeep", logo: "/jeep.png" },
  { name: "Kia", logo: "/kia.png" },
  { name: "Lancia", logo: "/lancia.png" },
  { name: "Land Rover", logo: "/landrover.png" },
  { name: "Lexus", logo: "/lexus.png" },
  { name: "Mazda", logo: "/mazda.png" },
  { name: "Mercedes-Benz", logo: "/mercedes.png" },
  { name: "Mini", logo: "/mini.png" },
  { name: "Mitsubishi", logo: "/mitsubishi.png" },
  { name: "Nissan", logo: "/nissan.png" },
  { name: "Opel", logo: "/opel.png" },
  { name: "Peugeot", logo: "/peugeot.png" },
  { name: "Pontiac", logo: "/pontiac.png" },
  { name: "Renault", logo: "/renault.png" },
  { name: "Rover", logo: "/rover.png" },
  { name: "Saab", logo: "/saab.png" },
  { name: "Seat", logo: "/seat.png" },
  { name: "Škoda", logo: "/skoda.png" },
  { name: "Smart", logo: "/smart.png" },
  { name: "Subaru", logo: "/subaru.png" },
  { name: "Suzuki", logo: "/suzuki.png" },
  { name: "Toyota", logo: "/toyota.png" },
  { name: "Volvo", logo: "/volvo.png" },
  { name: "Volkswagen", logo: "/volkswagen.png" },
];

const VehicleSearch = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBrandClick = (brandName) => {
    const slug = brandName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/brands/${slug}`);
  };

  return (
    <div className={styles.vehiclePage}>
      <input
        type="text"
        placeholder="Автомобил/Двигател"
        className={styles.vehicleInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.brandGrid}>
        {filteredBrands.map((brand) => (
          <div
            key={brand.name}
            className={styles.brandItem}
            onClick={() => handleBrandClick(brand.name)}
          >
            <img src={brand.logo} alt={brand.name} />
            <span>{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSearch;
