import React from "react";

const NavOptions = () => {
  return (
    <div className="w-[400px] justify-between flex">
      <div className="fckin" >QR Codes</div>
      <div>FAQ</div>
      <div>Why Us</div>
      <div>Product</div>
      <div>Blog</div>
    </div>
  );
};

const AuthBtns = () => {
  return <div></div>;
};

const Navbar = () => {
  return (
    <div className="w-[100%] h-[100px] flex items-center justify-between pl-[100px] pr-[50px]">
      <img src="/logo.png" className="w-[200px]" alt="" />
      <NavOptions />
      <AuthBtns />
    </div>
  );
};

export default Navbar;
