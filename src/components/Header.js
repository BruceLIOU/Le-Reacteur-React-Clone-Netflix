import { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import PictoUser from "../assets/img/picto-user.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [scrollDectect, setScrollDectect] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY !== 0) {
        setScrollDectect(true);
      } else {
        setScrollDectect(false);
      }
    };
  }, [scrollDectect]);

  return (
    <div className={`header${scrollDectect ? " detectScrollBar" : ""}`}>
      <div className="nav">
        <img className="logo" alt="Logo Netflix" src={Logo} />
        <div className="menu">
          <ul>
            <li>Accueil</li>
            <li>Séries</li>
            <li>Films</li>
            <li>Nouveautés les plus regardées</li>
            <li>Ma liste</li>
            <li>Audio et sous-titre</li>
          </ul>
        </div>
      </div>
      <div className="linksAccess">
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="direct">DIRECT</div>
        <div className="notif">
          <FontAwesomeIcon icon={faBell} />
          <span className="notification-pill">14</span>
        </div>
        <div className="user">
          <div className="pictoUser">
            <img className="picto-user" alt="Picto User" src={PictoUser} />
          </div>
          <span className="carret"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
