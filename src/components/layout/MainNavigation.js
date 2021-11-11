import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';
// nelze napsat primo import mainNavigation.css

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

// link by se dal uelat i jako <a href=.. > ale ta request by se poslala predem, coz je zbytecne
// pomoci Link se to bude renderovat interne. nebude to sendovat request. zustaneme na te naloadovane strance.
// jen se naloaduje to co chceme.
