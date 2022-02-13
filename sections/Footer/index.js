import React from 'react';
import {Typography, Container} from '@material-ui/core';
import Link from "../../src/Link";
import useStyles from "./indexStyles";

function Copyright() {
	return (
	  <Typography variant="body2" color="textSecondary">
		{'Copyright © '}
		<Link color="inherit" href="https://material-ui.com/">
		  Transformers, Inc.
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }

export default function Footer(props) {
	const classes = useStyles();
    return (<footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>);
}