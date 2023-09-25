type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

type Pet = {
  id: number;
  name: string;
  animal: Animal;
  description: string;
  breed: string;
  images: string[];
  city: string;
  state: string;
};
type BreedListApiResponse = {
  animal: Animal;
  breeds: string[];
};

type PetAPIResponse = {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
};
