import React from "react";
import Header from "../components/Header";

import "./Layout.css";

const Layout = (props) => {
  const { currentUser, handleLogout } = props;
  return (
    <div className="body-container">
      <Header currentUser={currentUser} handleLogout={handleLogout} />

      <aside className="right-side">
        <h3>All Movies</h3>
      </aside>

      <main>{props.children}</main>
      <footer>
        <h2>Dayna Marie</h2>
      </footer>
    </div>
  );
};

export default Layout;
