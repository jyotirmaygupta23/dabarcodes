import React from "react";

const Hamburger = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="xl:hidden mr-4 text-black text-4xl">
      {children}
    </button>
  );
};

export default Hamburger;