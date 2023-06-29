import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import people from "../../public/helpers/people.json";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

import {
  collection,
  updateDoc,
  getDoc,
  setDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";

import { database } from "../../firebase";

const alldebt = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const peopleRef = collection(database, "alldebts");
    const unsubscribe = onSnapshot(peopleRef, (snapshot) => {
      const peopleData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPeople(peopleData);
      console.log(peopleData);
    });
    return unsubscribe;
  }, []);

  const router = useRouter();

  return (
    <>
      <Header />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
          marginBottom: "8rem",
          gap: "2rem",
        }}
      >
        {people.map((person) => (
          <Button
            key={person.id}
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              gap: "10px",
              width: "80%",
              backgroundColor: "#222",
              borderRadius: "10px",
              color: "#fff",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
              textTransform: "none",
              gap: "1rem",
              padding: "1.5rem",
              border: "3px solid #E3A224",

              "&:hover": {
                backgroundColor: "#333",
              },
            }}
            onClick={() => {
              router.push(`/${person.id}`);
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

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                {person.name} {person.lastname}
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "start",
                }}
              >
                {person.local}
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "start",
                }}
              >
                {person.date}
              </Typography>
            </Box>
          </Button>
        ))}

        <Button
          sx={{
            position: "fixed",
            width: "80px",
            height: "80px",
            borderRadius: "9999px",
            backgroundColor: "#E3A224",
            color: "#fff",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
            fontSize: "40px",
            fontWeight: 700,
            bottom: "20px",
            right: "20px",

            "&:hover": {
              backgroundColor: "#b07e0c",
            },
          }}
        >
          +
        </Button>
      </Box>
    </>
  );
};

export default alldebt;
