import { Box, Button, Typography } from "@mui/material";
import React from "react";
import people from "../../public/helpers/people.json";
import Image from "next/image";
import arrow from "../../public/assets/RecentDebt/arrow.svg";
import { useRouter } from "next/router";
import moment from "moment";

const RecentDebt = () => {
  const router = useRouter();

  return (
    <>
      <Typography
        sx={{
          color: "#fff",
          fontSize: "26px",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        Recentes
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "8px",
        }}
      >
        {people.map((person) => (
          <Box
            key={person.id}
            sx={{
              width: "210px",
              height: "228px",
              flexShrink: 0,
              bgcolor: "#222",
              color: "#fff",
              padding: "0.3rem 1rem",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
            }}
          >
            <Image
              src={person.photo}
              alt={person.name}
              width={60}
              height={60}
              style={{
                borderRadius: "500px",
              }}
            />
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                height: "5rem",
              }}
            >
              {person.name} {person.lastname}
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "0.5rem",
                color: "#777",
              }}
            >
              {moment(person.date).format("DD/MM/YYYY")}
            </Typography>

            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  marginBottom: "1.3rem",
                  fontSize: "18px",
                  fontWeight: 700,
                  marginRight: "1.5rem",
                }}
              >
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(person.price)}
              </Typography>

              <Button
                sx={{
                  height: "30px",
                  bgcolor: "#E3A224",
                  borderRadius: "20px",

                  "&:hover": {
                    bgcolor: "#905F00",
                  },
                }}
                onClick={() => {
                  router.push(`/${person.id}`);
                }}
              >
                <Image src={arrow} alt="arrow" width={40} height={18} />
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default RecentDebt;
