import React from "react";

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-900 text-white rounded-md p-3 font-semibold "
    >
      {children}
    </button>
  );
}

export default Button;
