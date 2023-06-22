import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import user from "../../public/assets/Header/user.svg";
import bell from "../../public/assets/Header/bell.svg";

const Header = () => {
  return (
    <>
      <Box
        component="nav"
        sx={{
          width: "100%",
          height: "65px",
          display: "flex",
          backgroundColor: "#181818",
          justifyContent: "space-around",
          alignItems: "center",
          color: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Image src={user} alt="user" width={30} height={30} />

        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Dashboard
        </Typography>

        <Image src={bell} alt="bell" width={30} height={30} />
      </Box>
    </>
  );
};

export default Header;
