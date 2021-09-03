import React from "react";
import {
  FooterCon,
  FooterCopyright,
  FooterLogo,
  FooterNav,
} from "../styledComps/footerSC";

export const Footer = () => {
  const nevElements = [
    "About us",
    "Download apps",
    "Become a guide",
    "Careers",
    "Contact",
  ];
  return (
    <FooterCon id="FooterCon">
      <FooterLogo id="FooterLogo">
        <img src="/img/logo-green.png" alt="Natour logo" />
      </FooterLogo>
      <FooterNav id="FooterNav">
        {nevElements.map((item) => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </FooterNav>
      <FooterCopyright>
        © 2021 by Jonas Schmedtmann.
      </FooterCopyright>
    </FooterCon>
  );
};
