"use client";

import form from "@/ui/form";

import DiaLogProvider from "@/ui/dialog/dialogState";
import Modal from "@/ui/dialog/modal";
import Form from "@/ui/form";

export default function Page() {
  return (
    <DiaLogProvider>
      <div className="m-auto mx-0">
        <div className="flex flex-col justify-center items-center h-screen gap-8">
          <h1 className="text-xl font-bold">Enter Your Location</h1>
          <Form />
        </div>
        <Modal />
      </div>
    </DiaLogProvider>
  );
}
