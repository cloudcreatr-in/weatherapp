"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

const LoadingBar = () => (
  <div className="h-[20px] w-[100%]  max-w-4xl bg-gray-200 rounded-lg animate-pulse"></div>
);

function Loading() {
  return (
    <div className="flex flex-col gap-3 w-full p-9">
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
    </div>
  );
}

export default function Page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [count, setCount] = useState(0);
  const data = [
    "Searching Location...",
    "Analyzing Clouds...",
    "Looking Outside Your Window...",
    "Gathering Last Information...",
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      if (isOpen) {
        if (count === 4) {
          setLoading(false);
          console.log("i am running");
          clearInterval(interval);
        } else {
          setCount((count) => count + 1);
          console.log(data[count]);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [count, isOpen]);

  useEffect(() => {
    if (!isOpen) setCount(0);
  }, [isOpen]);

  return (
    <div className="m-auto mx-0">
      <div className="flex flex-col justify-center items-center h-screen gap-8">
        <h1 className="text-xl font-bold">Enter Your Location</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
          className="flex flex-col gap-4 w-full px-4 max-w-md"
        >
          <input
            type="text"
            className="bg-gray-100 rounded-md p-3 focus:outline-black focus:outline-offset-4 focus:outline-2"
          />

          <button
            className="bg-slate-900 text-white rounded-md p-3 font-semibold "
            type="submit"
          >
            Check Weather
          </button>
        </form>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div
          className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-6">
          <Dialog.Panel className="bg-white h-[80vh] w-full rounded-lg max-w-2xl border-2 border-gray-200 flex flex-col justify-center items-center p-4">
            {loading ? (
              <>
                <Dialog.Title className="text-2xl font-semibold text-center">
                  {data[count]}
                </Dialog.Title>
                <Loading />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl font-semibold text-center">
                  idk, just look outside.
                </div>
                <button
                  className="bg-slate-900 text-white rounded-md p-3 font-semibold "
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
