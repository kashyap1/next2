import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Link from "../../src/Link";
import style from "./indexStyles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" sx={(theme) => ({color: theme.palette.common.white})}>
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Transformers, Inc.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer(props) {
  return (
    <Box sx={style.footer} component="footer">
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  );
}
