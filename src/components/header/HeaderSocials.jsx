import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/glennaftali" target="_blank ">
        <BsLinkedin />
      </a>
      <a href="https://instagram.com/glennaftali" target="_blank ">
        <FaInstagramSquare />
      </a>
      <a href="https://github.com/glennaftali" target="_blank ">
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
