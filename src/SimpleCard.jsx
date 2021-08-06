import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const AddButton = withStyles((theme) => ({
    root: {
        color: 'black',   
        backgroundColor: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#FCDADA',
        },
    },
}))(Button);

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{background: "#F1F2FC"}}>
      <CardContent>
        <form className={classes.form} noValidate>
        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        style={{borderRadius: 21}}
                        size="small"
                        name="name"
                        label="Name of the board"
                        type="text"
                        id="name"
                    />

      <AddButton variant="contained" color="primary" className={classes.submit} fullWidth style={{borderRadius: 21}}>
                        Change Background
                    </AddButton>
      </form>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="small" style={{borderRadius: 50, background: 'aqua'}}>&nbsp;</Button>
        <Button size="small" style={{borderRadius: 50, background: 'coral'}}>&nbsp;</Button>
        <Button size="small" style={{borderRadius: 50, background: 'yellow'}}>&nbsp;</Button>
        <Button size="small" style={{borderRadius: 50, background: 'green'}}>&nbsp;</Button>
      </CardActions>
    </Card>
  );
}