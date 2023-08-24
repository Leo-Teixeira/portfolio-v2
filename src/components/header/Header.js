import React from "react";
import "./Header.scss";

export default function Header() {
  const menuItems = [
    {label: "< Compétences techniques />", href: "#skills", key: "skills"},
    {label: "< Projets />", href: "#projects", key: "projects"},
    {label: "< Ecoles />", href: "#education", key: "education"},
    {
      label: "< Experiences Professionnelles />",
      href: "#experience",
      key: "experience"
    },
    {label: "< Me Contacter />", href: "#contact", key: "contact"}
  ];

  return (
    <header className={"dark-menu header"}>
      <a href="/" className="logo">
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">Léo Teixeira</span>
        <span className="grey-color">/&gt;</span>
      </a>
      <ul className={"dark-menu menu"}>
        {menuItems.map(item => (
          <li key={item.key}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
