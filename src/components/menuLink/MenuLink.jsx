import React from "react";
import "./menulink.css";
import { useSelector } from "react-redux";

export default function MenuLink({ icon, text }) {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && user.name}
      </span>
    </div>
  );
}
