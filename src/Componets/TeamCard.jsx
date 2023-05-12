import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import styles from "../styles/PagesStyles/SingleCard.module.css";
function TeamCard() {
    const teamData=JSON.parse(localStorage.getItem("team") )||[] ;
   
  return (
    <div className={styles.teamContainer}>
      {teamData.length > 0
        ? teamData.map((ele) => (
            <div className={styles.teamCard}>
              <img
                className={styles.teamImg}
                src={ele.avatar}
                alt="image loading"
              />
              <Text
                fontSize={"2xl"}
              >{`${ele.first_name} ${ele.last_name}`}</Text>
              <Text fontSize={"md"}>{`Gender : ${ele.gender}`}</Text>
              <Text fontSize={"md"}>{`Domain : ${ele.domain}`}</Text>
              <Text fontSize={"md"}>{`Email : ${ele.email}`}</Text>
            </div>
          ))
        : <Text>Please make your</Text>}
    </div>
  );
}

export default TeamCard;
