import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const id = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Box>
      <h1>ID: {id}</h1>
    </Box>
  );
};

export default id;
