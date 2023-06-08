import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "white",
    padding: (theme) => theme.spacing(3),
    marginTop: "auto",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <IconButton
            component={Link}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            component={Link}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            component={Link}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
