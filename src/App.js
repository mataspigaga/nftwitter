import classes from "./styles/App.module.css";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState("false");

  const logInHandler = () => {
    setLoggedIn((prevState) => !prevState);
  };

  return (
    <div className={classes.home}>
      <header className={classes.header}>
        <div className={classes.container}>
          <h1 className={classes.logo}>NFTwitter</h1>
          <nav className={classes.nav}>
            {loggedIn && <a href="/">Profile</a>}
            <button onClick={logInHandler}>
              {loggedIn ? "Disconnect" : "Connect Wallet"}
            </button>
          </nav>
        </div>
      </header>
      <main className={classes.main}>
        <section className={classes.section}>
          <div className={classes.container}></div>
        </section>
      </main>
    </div>
  );
};

export default App;
