import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchShowsSummary } from "../services/api";
import FormDialog from "./Form";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";

function ShowSummary() {
  const { showId } = useParams();
  const [summary, setSummary] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch show summary
    async function fetchSummary() {
      try {
        const data = await searchShowsSummary(`${showId}`);
        if (data) {
          setSummary(data?.summary);
          setData(data);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchSummary();
  }, [showId]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h3">Show Details</Typography>
        </Box>
        <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
            }}
          >
            <img
              style={{
                margin: "10px",
                height: 640,
                width: 210,
                borderRadius: "10px",
                flex: 1,
                display: "flex",
              }}
              src={data.image?.original}
              alt="Movie Poster"
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              margin: "40px",
              textAlign: "left"
            }}
          >
            <Typography variant="h5">Show name : {data?.name}</Typography>
            <Typography variant="h5">Genres : {data?.genres}</Typography>
            <Typography variant="h5">Language : {data?.language}</Typography>
            <Typography variant="h5">Premiered : {data?.premiered}</Typography>
            <Typography variant="h5">Status : {data?.status}</Typography>
            <Typography variant="h5">Type : {data?.type}</Typography>
            <Typography variant="h5">
              Rating : {data?.rating?.average}
            </Typography>
            <Typography variant="h5">
              Schedule : {data?.schedule?.days}
            </Typography>
            <Typography dangerouslySetInnerHTML={{ __html: summary }} />
            <FormDialog data={data} />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default ShowSummary;
