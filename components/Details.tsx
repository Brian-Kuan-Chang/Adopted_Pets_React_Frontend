"use client";
import { fetchPet } from "@/utils/api";
import { redirect, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import Modal from "./Modal";
import AdoptedPetContext from "@/utils/AdoptedPetContext";
import Carousal from "./Carousal";

const Details = ({ id }: { id: string }) => {
  const router = useRouter();
  const navToHome = () => {
    router.push("/");
  };
  if (!id) {
    throw new Error("no id provided to details");
  }
  const [_, setAdoptedPet] = useContext(AdoptedPetContext) ?? [];
  const [showModal, setShowModal] = useState(false);
  const result = useQuery(["details", id], fetchPet);

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = result?.data?.pets[0];
  if (!pet) {
    throw new Error("pet not found in details");
  }
  return (
    <div className="w-full h-full flex flex-col  px-10 max-w-lg items-center flex-wrap">
      <Carousal images={pet.images} />
      <div className="bg-sky-300 p-4">
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button
          className="bg-slate-400 my-2 px-4 py-2 rounded-md"
          onClick={() => setShowModal(true)}
        >
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div className="w-full h-[60px] flex flex-col justify-center items-center bg-slate-200 ">
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="flex justify-around w-[100px] ">
                <button
                  className=""
                  onClick={() => {
                    setAdoptedPet!(pet);
                    router.push("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};
export default Details;
