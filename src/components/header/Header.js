import React, {useContext} from "react";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Header() {
  const {isDark} = useContext(StyleContext);

  const menuItems = [
    {label: "<Langages />", href: "#skills", key: "skills"},
    {label: "< Mes projets />", href: "#projects", key: "projects"},
    {label: "< Ecoles />", href: "#education", key: "education"},
    {
      label: "< Experience Professionnel />",
      href: "#experience",
      key: "experience"
    },
    {label: "< Me Contacter />", href: "#contact", key: "contact"}
  ];

  return (
    <header className={isDark ? "dark-menu header" : "header"}>
      <a href="/" className="logo">
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">Léo Teixeira</span>
        <span className="grey-color">/&gt;</span>
      </a>
      <ul className={isDark ? "dark-menu menu" : "menu"}>
        {menuItems.map(item => (
          <li key={item.key}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
