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
            <Link className='show-all-movies' to="/movies">Movies</Link>
          </>
        )}
      </div>

      <div className="add-new-movie">
        {currentUser && (
          <>
            <Link className='add-movie-main'to="/movies/add">
              <div className='add-movie-main'>Add
                <br></br>New
                <br></br>Movie
              </div></Link>
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
