import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import BootstrapButton from 'react-bootstrap/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 17,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function SimpleCard() {
  const classes = useStyles();
  
  return (
    <>
    <Card className={classes.root} style={{background: "#F1F2FC"}}>
      <CardContent>
        <form className={classes.form} noValidate>
        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        style={{ borderRadius: 15}}
                        size="small"
                        name="name"
                        label="Name of the board"
                        type="text"
                        className="box"
                        id="name"
                    />

      <Typography variant="h1" className={classes.title} align="center">
            Change Background
          </Typography>
      </form>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <BootstrapButton size="small" style={{borderRadius: 50, background: 'aqua'}}>&nbsp;&nbsp;</BootstrapButton>
        <BootstrapButton size="small" style={{borderRadius: 50, background: 'coral'}}>&nbsp;&nbsp;</BootstrapButton>
        <BootstrapButton size="small" style={{borderRadius: 50, background: 'yellow'}}>&nbsp;&nbsp;</BootstrapButton>
        <BootstrapButton size="small" style={{borderRadius: 50, background: 'green'}}>&nbsp;&nbsp;</BootstrapButton>
      </CardActions>
    </Card>
    </>
  );
}
