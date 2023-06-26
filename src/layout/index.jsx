import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="w-[100%] h-[100vh]">
      <div className="w-[100%] h-[100vh] absolute z-0">
        <img src="/main-bg.png" className="w-[100%] h-[100vh]" alt="" />
      </div>
      <div className="w-[100%] h-[100vh] bg-[#ffffff10] backdrop-blur-sm absolute z-10">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
