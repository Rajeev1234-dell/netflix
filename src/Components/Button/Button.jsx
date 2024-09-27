import React from "react";

function Button({ label }) {
  return (
    <button className="bg-btncolor rounded-lg py-3.5 px-6 text-lg text-white font-semibold">
      {label}
    </button>
  );
}

export default Button;
