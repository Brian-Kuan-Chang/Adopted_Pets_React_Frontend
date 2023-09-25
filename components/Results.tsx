import React from "react";
import Pet from "./Pet";

const Results = ({ pets }: { pets: Pet[] }) => {
  console.log("pets:", pets);
  return (
    <div className="grid grid-cols-2 gap-4 bg-slate-300 p-4">
      {!pets.length ? (
        <div>
          <h1>No Pets Found</h1>
        </div>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
