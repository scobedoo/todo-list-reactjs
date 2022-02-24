import React from "react";

const TodoCard = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#5b5efa] pt-[56px]">
      <div className="max-w-xl mx-auto rounded-3xl bg-[#161b2c] px-8 py-6 h-[600px] overflow-y-auto">
        <h3 className="font-medium text-xl text-center text-white">
          {children}
        </h3>
      </div>
    </div>
  );
};

export default TodoCard;
