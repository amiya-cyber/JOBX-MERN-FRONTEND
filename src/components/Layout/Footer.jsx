import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By AS Company.</div>
      <div>
        <Link to={"http://linkedin.com/in/gayatri-kadukar-09978727b"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/gayatri_kadukar/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
