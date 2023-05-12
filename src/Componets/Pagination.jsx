import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
function Pagination(prop) {
  console.log(prop.tp)
  return (
    <div>
      <Button
        isDisabled={prop.page === 1}
        onClick={prop.pre}
        m={"10px"}
        colorScheme="yellow"
      >
        prev
      </Button>
      <Button colorScheme="teal">{prop.page}</Button>
      <Button
        isDisabled={prop.page === 50}
        onClick={prop.next}
        m={"10px"}
        colorScheme="yellow"
      >
        next
      </Button>
    </div>
  );
}

export default Pagination;
