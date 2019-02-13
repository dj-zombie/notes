import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = (theme: any) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: 0,
    borderTop: '1px solid rgba(0,0,0,0.3)',
  },
  title: {
    color: '#3f51b5',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
});

function Note(props: any) {
  const { classes, note } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" className={classes.title} gutterBottom={true} component="h5">
          {note.title}
        </Typography>
        <Divider variant="middle" />
        <Typography
          style={{ whiteSpace: 'pre-wrap' }}
          component="p"
          variant="body2"
          paragraph={true}
        >
          {note.note}
        </Typography>
      </Paper>
    </div>
  );
}

Note.propTypes = {
  classes: PropTypes.object.isRequired,
  note: PropTypes.object.isRequired,
};

export default withStyles(styles)(Note);
