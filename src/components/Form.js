import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(data) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    // Get the input values
    const movieName = document.getElementById("movie-name").value;
    const genres = document.getElementById("genres").value;
    const language = document.getElementById("language").value;
    const releaseDate = document.getElementById("release-date").value;
    const rating = document.getElementById("rating").value;
    const schedule = document.getElementById("schedule").value;

    // Create an object with the input values
    const movieData = {
      movieName,
      genres,
      language,
      releaseDate,
      rating,
      schedule,
    };

    // Store the data in local storage
    localStorage.setItem("movieData", JSON.stringify(movieData));

    // Display the stored data in the console
    const storedData = JSON.parse(localStorage.getItem("movieData"));
    console.log("Stored Data:", storedData);
  };

  // console.log(data.data.name);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Book Movie Ticket
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Movie Booking</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thanks for Booking with us, Have a great Day
          </DialogContentText>
          <TextField
            sx={{ margin: "10px" }}
            defaultValue={data.data.name}
            id="movie-name"
            label="Show Name"
            variant="outlined"
          />
          <TextField
            sx={{ margin: "10px" }}
            defaultValue={data.data.genres}
            id="genres"
            label="Genres"
            variant="outlined"
          />
          <TextField
            sx={{ margin: "10px" }}
            defaultValue={data.data.language}
            id="language"
            label="Language"
            variant="outlined"
          />
          <TextField
            sx={{ margin: "10px" }}
            defaultValue={data.data.premiered}
            id="release-date"
            label="Release Date"
            variant="outlined"
          />
          <TextField
            sx={{ margin: "10px" }}
            defaultValue={data?.data?.rating?.average}
            id="rating"
            label="Rating"
            variant="outlined"
          />
          <TextField
            sx={{ margin: "10px" }}
            defaultValue={data?.data?.schedule?.days}
            id="schedule"
            label="Schedule"
            variant="outlined"
          />
        </DialogContent>
        <DialogContentText sx={{margin : "20px"}}>
            You can check your booking details in the console after clicking submit
          </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
