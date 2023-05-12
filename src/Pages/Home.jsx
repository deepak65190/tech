import React from "react";
import Product from "../Componets/Product";
import styles from "../styles/PagesStyles/Home.module.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.container}>
  
        <div>
       <Product/>
        </div>
      </div>
    </div>
  );
}

export default Home;
