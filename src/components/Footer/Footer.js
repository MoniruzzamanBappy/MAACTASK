import React from "react";
import logo from "../../Media/logo.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-8" style={{ backgroundColor: "#00193D" }}>
      <img className="mx-auto" src={logo} alt="" />
      <h1 className="text-xl  text-white text-center">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      </h1>
      <h1 className="text-xl text-white text-center">
        accusantium doloremque laudantium, totam rem aperiam eaque.
      </h1>

      <div className="flex justify-center gap-8 my-4">
        <p className="text-5xl text-white">
          <AiFillTwitterCircle />
        </p>
        <p className="text-5xl text-white">
          <AiFillLinkedin />
        </p>
        <p className="text-5xl text-white">
          <BsFacebook />
        </p>
      </div>

      <hr style={{ borderColor: "#0D3166" }} />
      <h1 className="text-xl mt-4 text-white text-center">
        © All rights reserve by <span className="text-red-600">MAAC</span>
      </h1>
    </div>
  );
};

export default Footer;
