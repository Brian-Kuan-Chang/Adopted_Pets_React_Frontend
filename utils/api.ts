import { QueryFunction, QueryStatus, useQuery } from "react-query";

export function useBreedList(animal: Animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}

const fetchBreedList: QueryFunction<
  BreedListApiResponse,
  ["breeds", Animal]
> = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) return [];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!res.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  return await res.json();
};

export const fetchSearch: QueryFunction<
  PetAPIResponse,
  ["search", { location: string; animal: string; breed: string }]
> = async ({ queryKey }) => {
  const { location, animal, breed } = queryKey[1];
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok)
    throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);

  return res.json();
};

export const fetchPet: QueryFunction<
  PetAPIResponse,
  ["details", string]
> = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};
