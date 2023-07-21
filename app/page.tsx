"use client";

import Button from "@/app/ui/button";
import Link from "next/link";
import Form from "@/app/ui/form";
import { useLocation } from "@/app/contextproviders/locationContext";
import getLocation from "./weather/getlocation";
import { useDialogState } from "@/app/contextproviders/dialogState";

import Modal from "@/app/weather/modal";

export default function Page() {
  const { setLocation, setIsAutoDetect } = useLocation();
  const { setIsOpen, isOpen } = useDialogState();

  // const { latitude, longitude } = await getLocation();
  return (
    <div className="m-auto mx-0">
      <div className="flex flex-col justify-center items-center h-screen gap-8">
        <h1 className="text-xl font-bold">Enter Your Location</h1>
        <Form />
        <Button
          onClick={() => {
            // setLocation(latitude, longitude);
            setIsAutoDetect(true);
            setIsOpen(true);
            console.log(isOpen);
          }}
        >
          Auto Detect The Weather
        </Button>

        <Button>
          <Link
            href={`/w/ommmmm`}
            onClick={() => {
              // setLocation(latitude, longitude);

              setIsOpen(true);
            }}
          >
            go to om
          </Link>
        </Button>
      </div>
    </div>
  );
}
