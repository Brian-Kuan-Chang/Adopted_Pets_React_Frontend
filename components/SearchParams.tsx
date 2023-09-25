"use client";
import Results from "./Results";
import { fetchSearch, useBreedList } from "@/utils/api";
import React, { useState } from "react";
import { useQuery } from "react-query";
const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("" as Animal);
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  return (
    <div className="p-6 w-full max-w-screen-md mx-auto flex">
      <div className="w-1/2 pr-4">
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const obj = {
              animal: formData.get("animal")?.toString() ?? "",
              breed: formData.get("breed")?.toString() ?? "",
              location: formData.get("location")?.toString() ?? "",
            };
            setRequestParams(obj);
          }}
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="location" className="text-lg">
              Location
            </label>
            <input
              className="border-2 border-gray-300 p-2 rounded"
              type="text"
              name="location"
              id="location"
              placeholder="Please enter location"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="animal" className="text-lg">
              Animal
            </label>
            <select
              className="border-2 border-gray-300 p-2 rounded"
              name="animal"
              id="animal"
              onChange={(e) => {
                setAnimal(e.target.value as Animal);
              }}
              onBlur={(e) => {
                setAnimal(e.target.value as Animal);
              }}
            >
              {ANIMALS.map((animal) => (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="breed" className="text-lg">
              Breed
            </label>
            <select
              className="border-2 border-gray-300 p-2 rounded"
              disabled={!breeds.length}
              id="breed"
              name="breed"
            >
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-2/3 pl-4 ">
        <div className="">
          <Results pets={pets}></Results>
        </div>
      </div>
    </div>
  );
};

export default SearchParams;
