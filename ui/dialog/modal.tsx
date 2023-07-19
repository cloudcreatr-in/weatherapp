"use client";

import { Dialog } from "@headlessui/react";
import Button from "@/ui/button";
import Loading from "@/ui/loading/loading";
import { useContext } from "react";
import { diaLogSet, diaLogState } from "@/ui/dialog/dialogState";

export default function Page() {
  const isOpen = useContext(diaLogState);
  const setIsOpen = useContext(diaLogSet);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div
        className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-6">
        <Dialog.Panel className="bg-white h-[80vh] w-full rounded-lg max-w-2xl border-2 border-gray-200 flex flex-col justify-center items-center p-4">
          <Dialog.Title className="text-2xl font-semibold text-center">
            yooooooooo
          </Dialog.Title>
          <Loading />
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-2xl font-semibold text-center">
              idk, just look outside.
            </div>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
