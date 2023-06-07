import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { searchShows } from "../services/api";
import { Box } from "@mui/material";

export default function MediaCard() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch shows data
    async function fetchShows() {
      const data = await searchShows("all");
      setShows(data);
    }
    fetchShows();
  }, []);

  const truncateSummary = (summary, maxLength) => {
    if (summary.length > maxLength) {
      return summary.substring(0, maxLength) + "...";
    }
    return summary;
  };

  return (
    <Box>
      <Typography
        sx={{ display: "flex", justifyContent: "center",margin : "10px"}}
        variant="h2"
        component="h2"
      >
        List of Shows
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {shows.map((show) => (
          <Card
            key={show.show.id}
            sx={{
              maxWidth: 345,
              backgroundColor: "#e6e7fd",
              borderRadius: "10px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
              },
            }}
          >
            <CardContent>
              <CardMedia
                sx={{
                  height: 340,
                  width: 310,
                  margin: "auto",
                  borderRadius: "10px",
                }}
                image={
                  show.show.image?.medium ||
                  "https://via.placeholder.com/210x295?text=No%20Image"
                }
                title="green iguana"
              />

              <Typography sx={{margin : "9px"}}  gutterBottom variant="h5" component="div">
                {show.show.name}
              </Typography>

              <Typography sx={{margin : "5px"}} dangerouslySetInnerHTML={{ __html: truncateSummary(show.show.summary, 150) }} />
            </CardContent>

            <Link to={`/show/${show.show.id}`}>
              <CardActions>
                <Button sx={{ color: "#5e35b1" }} size="small">
                  Know More...
                </Button>
              </CardActions>
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
