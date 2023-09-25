import SearchParams from "@/components/SearchParams";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import RootLayout from "./layout";

const page = () => {
  return (
    <div>
      <SearchParams />
    </div>
  );
};

export default page;
