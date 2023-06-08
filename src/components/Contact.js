import { Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "./Header";
import Button from "@mui/material/Button";
export default function Contact() {
  return (
    <>
      <Header />
      <Box sx={{ marginLeft: "50px", marginTop: "100px" }}>
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3">Contact</Typography>
        </Box>
        <Typography variant="h4" sx={{ mt: 2 }}>
          Get in touch
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Please fill out the form on this section to contact with me.
          <br /> Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
          Friday
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TextField label="Name" sx={{ width: "30%", fontSize: "1.2rem" }} />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField label="Email" sx={{ width: "30%", fontSize: "1.2rem" }} />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Message"
            multiline
            rows={4}
            sx={{ width: "30%", fontSize: "1.2rem" }}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" >Send Message</Button>
        </Box>
      </Box>
    </>
  );
}
