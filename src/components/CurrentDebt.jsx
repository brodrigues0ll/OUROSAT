import { Box, Button, Typography } from "@mui/material";
import React from "react";
import people from "../../public/helpers/people.json";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";

const RecentDebt = () => {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "0.5rem",
          justifyContent: "space-between",
          width: "92%",
          marginBottom: "0.5rem",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          Em Débito
        </Typography>

        <Button
          sx={{
            textTransform: "none",
          }}
        >
          <Typography
            sx={{
              color: "#555555",
              fontWeight: 700,
            }}
            onClick={() => {
              router.push("/alldebt");
            }}
          >
            Ver Tudo
          </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingLeft: "10px",
          marginLeft: "-10px",
        }}
      >
        {people.map((person) => (
          <Box
            key={person.id}
            sx={{
              width: "150px",
              height: "240px",
              flexShrink: 0,
              bgcolor: "#222",
              color: "#fff",
              padding: "0.3rem 1rem",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <Image
              src={person.photo}
              alt={person.name}
              width={60}
              height={60}
              style={{
                borderRadius: "500px",
                marginBottom: "0.6rem",
              }}
            />
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                height: "5rem",
                textAlign: "center",
              }}
            >
              {person.name} <br /> {person.lastname}
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
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  padding: "0.2rem 0.5rem",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(person.price)}
              </Typography>
            </Button>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default RecentDebt;
