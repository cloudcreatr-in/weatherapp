import Button from "@/ui/button";
import { useContext } from "react";
import { diaLogSet } from "@/ui/dialog/dialogState";

export default () => {
  const setIsOpen = useContext(diaLogSet);
  return (
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
      <Button>Check Weather</Button>
    </form>
  );
};
