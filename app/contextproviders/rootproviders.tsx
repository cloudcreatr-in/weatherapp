"use client";
import DiaLogProvider from "@/app/contextproviders/dialogState";
import LocationContext from "@/app/contextproviders/locationContext";

export default function page({ children }) {
  return (
    <DiaLogProvider>
      <LocationContext>{children}</LocationContext>
    </DiaLogProvider>
  );
}
