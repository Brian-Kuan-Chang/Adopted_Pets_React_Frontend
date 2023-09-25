import Details from "@/components/Details";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex w-full items-center justify-center">
      <Details id={params.id}></Details>;
    </div>
  );
}
