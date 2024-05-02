import React from "react";
import ReactDOM from "react-dom";
// import { Footer } from "./Footer";
// import { HomeContent } from "./HomePageComponent";
import { Header } from "./Header";

import  styles from "./App.scss";

const App = () => (
  <><div>ABC</div><div className={styles.container}>
        <Header app='HOME HEADER APPP ' />
        {/* <HomeContent /> */}
        {/* <Footer /> */}
    </div></>
);

export default App;
