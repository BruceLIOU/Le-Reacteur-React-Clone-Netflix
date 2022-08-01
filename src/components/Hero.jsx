import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfo } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <img
        className="hero-image"
        src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcPs0KNVkOJ2dz3xX-xQt1Ms1QycQfT2Je6bLlXOIdKs_7_rk4X6v0Nn6JwSejEopKSxanlRMIQ-RUrMdHUBNUHBJE_sNDUNoYOb.webp?r=642"
        alt=""></img>
      <div className="trailer">
        <div className="titleHero">
          <h1>Sélection du jour pour Bruce</h1>
          <h2>MANIFEST</h2>
        </div>
        <div className="description">
          <p>
            Quand un avion atterrit mystérieusement des années après son
            décollage, les passagers découvrent l'étrange nouvelle réalité d'un
            monde qui a continué d'avancer sans eux.
          </p>
        </div>
      </div>
      <div className="ctaContainer">
        <div className="ctaContainerBtn">
          <div className="player">
            <FontAwesomeIcon icon={faPlay} />
            <span>Reprendre</span>
          </div>
          <div className="infos">
            <div className="containerIconInfo">
              <FontAwesomeIcon icon={faInfo} />
            </div>
            <span>Plus d'infos</span>
          </div>
        </div>
        <div className="classAge">13+</div>
      </div>
    </div>
  );
};

export default Hero;
