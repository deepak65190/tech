import React from 'react'
import TeamCard from '../Componets/TeamCard'
import styles from "../styles/PagesStyles/Home.module.css";
function Team() {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.container}>
        <div>
          <TeamCard />
        </div>
      </div>
    </div>
  );
}

export default Team