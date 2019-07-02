import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      className={classes.container}
    >
      <CssBaseline />
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h6" align="center">
              Not found content
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              The requested content was not found!
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Link href="/">
              <Button variant="contained" color="primary" className={classes.button}>
                Go Home!
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
