import React from "react";

const currentTime = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright © {currentTime}</p>
      </footer>
    </div>
  );
}

export default Footer;
