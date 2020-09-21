import React from "react";
import { Link } from "react-router-dom";
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

      <div className="all-movies">
        {currentUser && (
          <>
            <Link to="/movies">Movies</Link>
          </>
        )}
      </div>

      <div className="add-new-movie">
        {currentUser && (
          <>
            <Link to="/movies/add">Add New Movie</Link>
          </>
        )}
      </div>

      <main>{props.children}</main>
      <footer>
        <h2>Dayna Marie</h2>
      </footer>
    </div>
  );
};

export default Layout;
