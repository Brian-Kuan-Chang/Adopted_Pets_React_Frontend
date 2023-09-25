"use client";
import AdoptedPetContext from "@/utils/AdoptedPetContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adoptedPet = useState<null | Pet>(null);
  return (
    <QueryClientProvider client={queryClient}>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <html lang="en">
          <body className={inter.className}>
            <div id="modal"></div>
            <div className="w-full h-[60px] flex justify-center items-center bg-slate-400">
              Adopt me
            </div>
            {children}
          </body>
        </html>
      </AdoptedPetContext.Provider>
    </QueryClientProvider>
  );
}
