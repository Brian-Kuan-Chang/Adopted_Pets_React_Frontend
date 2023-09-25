import { Dispatch, SetStateAction, createContext } from "react";

type AdoptedPetContextType = [null | Pet, Dispatch<SetStateAction<null | Pet>>];
const AdoptedPetContext = createContext<AdoptedPetContextType | undefined>(
  undefined
);

export default AdoptedPetContext;
