import React, { useEffect, useState } from "react";
import styles from "../styles/PagesStyles/SingleCard.module.css";
import { Text, Button, useToast } from "@chakra-ui/react";

function SingleProductCard(props) {
  const toast = useToast();
  const handleTeam = (data) => {
    let teamArray = JSON.parse(localStorage.getItem("team")) || [];
    let tp = teamArray.find(({ domain }) => domain === data.domain);
if(!data.available) {
       toast({
         title: `You are not present ${data.first_name}`,

         status: "error",
         duration: 9000,
         isClosable: true,
       });
    } else if (tp){
    toast({
      title: ` ${data.domain} ${data.gender} is  alreay in the team`,

      status: "warning",
      duration: 9000,
      isClosable: true,
    });
   }
    else if (data.available) {
      teamArray.push(data);
      localStorage.setItem("team", JSON.stringify(teamArray));
      toast({
        title: `welcome in the team ${data.first_name}`,
        
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } 
  };

  return (
    <div className={styles.singleCard}>
      <img
        className={styles.avtarImg}
        src={props.data.avatar}
        alt="image loading"
      />
      <Text
        fontSize={"2xl"}
      >{`${props.data.first_name} ${props.data.last_name}`}</Text>
      <Text fontSize={"md"}>{`Gender : ${props.data.gender}`}</Text>
      <Text fontSize={"md"}>{`Domain : ${props.data.domain}`}</Text>
      <Text fontSize={"md"}>{`Email : ${props.data.email}`}</Text>
      <Text>{`Available : ${props.data.available ? "YES" : "NO"}`}</Text>
      <Button
        onClick={() => handleTeam(props.data)}
        m={"10"}
        padding={"5px"}
        display={"block"}
        margin={"auto"}
        colorScheme="white"
        variant="outline"
      >
        add to team
      </Button>
    </div>
  );
}

export default SingleProductCard;
