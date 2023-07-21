"use client";

import { Dialog } from "@headlessui/react";
import { useDialogState } from "@/app/contextproviders/dialogState";

export default function Page({ children }) {
  const { isOpen, setIsOpen } = useDialogState();

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-6">
          <Dialog.Panel className="  h-[90vh] w-full rounded-lg max-w-sm border-2 border-gray-300 flex flex-col justify-start p-8  backdrop-blur-lg">
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
