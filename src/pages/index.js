import Header from "@/components/Header";
import RecentDebt from "@/components/RecentDebt";
import CurrentDebt from "@/components/CurrentDebt";
import { Box, Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>OuroSat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <Box
        component="section"
        sx={{
          bgcolor: "#181818",
          borderRadius: "0px 0px 0px 40px",
          padding: "17px 10px 17px 34px",

          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <RecentDebt />
      </Box>

      <Box
        component="section"
        sx={{
          bgcolor: "#EFEFEF",
          borderRadius: "0px 0px 0px 40px",
          padding: "17px 10px 17px 34px",

          // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <CurrentDebt />
      </Box>
    </>
  );
}
